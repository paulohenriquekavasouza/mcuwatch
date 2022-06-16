import { Component, OnInit } from '@angular/core';
import shows from '../../assets/shows.json';
import movies from '../../assets/movies.json';
import oneshots from '../../assets/oneshots.json';
import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-organizer',
	templateUrl: './organizer.component.html',
	styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

	shows: any = shows;
	movies: any = movies;
	oneshots: any = oneshots;
	language: string = "";
	moviesChecked = true;
	showsChecked = false;
	oneShotsChecked = false;
	isChronological = 1;
	result: any = [];
	loading = false;
	minTime = 5;
	time = new FormControl(this.minTime, [Validators.required, Validators.min(this.minTime)]);
	frequency = 0;
	quantity = 0;

	constructor(public appService: AppService) {
		this.appService.getLanguage().subscribe(val => this.language = val);
	}

	ngOnInit(): void {
	}

	generate() {
		this.loading = true;
		// NOW THE FUN STARTS
		var tempResult: any = [];

		if (this.moviesChecked) {
			this.movies?.map((x: any) => tempResult.push(x));
		}
		if (this.showsChecked) {
			this.shows?.map((x: any) => tempResult.push(x));
		}
		if (this.oneShotsChecked) {
			this.oneshots?.map((x: any) => tempResult.push(x));
		}

		if (this.isChronological == 1) {
			// RELEASE ORDER
			// NOW WE ORDER IT BY RELEASE ORDER
			tempResult.sort((a: any, b: any) => (a?.orders?.releaseOrder < b?.orders?.releaseOrder ? -1 : 1));
		} else {
			// CHRONOLOGICAL ORDER
			// NOW WE ORDER IT BY CHRONOLOGICAL ORDER
			tempResult.sort((a: any, b: any) => (b?.orders?.chronologicalOrder > a?.orders?.chronologicalOrder ? -1 : 1));
		}

		this.result = tempResult;
		this.loading = false;
		// 31 minutos min
	}

}

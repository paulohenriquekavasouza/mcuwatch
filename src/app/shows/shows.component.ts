import { Component, OnInit } from '@angular/core';
import shows from '../../assets/shows.json';
import { AppService } from '../app.service';

@Component({
	selector: 'app-shows',
	templateUrl: './shows.component.html',
	styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

	shows: any = shows;
	language: string = "";

	constructor(public appService: AppService) {
		this.appService.getLanguage().subscribe(val => this.language = val);
	}

	ngOnInit(): void {
	}

}

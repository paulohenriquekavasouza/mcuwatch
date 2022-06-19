import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';
import { AppService } from '../app.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

	movies: any = movies;
	language: string = "";

	constructor(public appService: AppService) {
		this.appService.getLanguage().subscribe(val => this.language = val);
	}

	ngOnInit(): void {
	}

}

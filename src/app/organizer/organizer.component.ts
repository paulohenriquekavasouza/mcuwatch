import { Component, OnInit } from '@angular/core';
import shows from '../../assets/shows.json';
import movies from '../../assets/movies.json';
import oneshots from '../../assets/oneshots.json';
import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

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
	minDate = new Date();
	dateStart: any;
	frequency = 0;
	quantity = 0;
	days: any = [];
	selectedMovie: any;
	numDaysToWatch = 0;

	constructor(public appService: AppService,
		public translate: TranslateService,
		private modalService: NgbModal) {
		this.appService.getLanguage().subscribe(val => {
			this.language = val;
			this.translate.use(val);
		});
		this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() + 1));
		this.dateStart = this.minDate;
	}

	ngOnInit(): void {
	}

	open(content, movie) {
		this.selectedMovie = movie;
		this.modalService.open(content, { centered: true });
	}

	nextSaturday(date = new Date()) {
		const dateCopy = new Date(date.getTime());
		dateCopy.setHours(0, 0, 0);

		const nextSaturday = new Date(
			dateCopy.setDate(
				dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7),
			),
		);

		return nextSaturday;
	}

	changeDate(ev) {
		this.dateStart = new Date(ev.value);
		this.dateStart.setDate(this.dateStart.getDate() + 1);
	}

	isValid() {
		return this.frequency > 0 && this.quantity > 0;
	}

	generate() {
		this.loading = true;
		this.days = [];
		this.numDaysToWatch = 0;
		new Observable(_ => {
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
			var dateStartFix = this.dateStart;

			// MOVIES AND SHOWS ORDERED, NOW WE'RE GOING TO SPLIT IT IN DAYS
			if (this.frequency == 1) {
				// EVERYDAY
				var currentDate = new Date(dateStartFix);

				this.result?.forEach((val: any) => {
					var day = this.days?.find(x => x.day == new Date(currentDate).toISOString().split('T')[0]);

					if (day) {
						if (day?.list?.length < this.quantity) {
							day?.list?.push(val);
						} else {
							if (day?.list?.length >= this.quantity) {
								currentDate.setDate(currentDate.getDate() + 1);
							}

							var info = {
								day: new Date(currentDate).toISOString().split('T')[0],
								list: [val]
							};
							this.days.push(info);
						}
					} else {
						var info = {
							day: new Date(currentDate).toISOString().split('T')[0],
							list: [val]
						};
						this.days.push(info);
					}

				})
			} else {
				// ONLY WEEKENDS
				var currentDate = new Date(dateStartFix);

				if (currentDate.getDay() >= 0 && currentDate.getDay() <= 5) {
					currentDate = this.nextSaturday(new Date(dateStartFix));
				}

				this.result?.forEach((val: any) => {
					var day = this.days?.find(x => x.day == new Date(currentDate).toISOString().split('T')[0]);

					if (day) {
						if (day?.list?.length < this.quantity) {
							day?.list?.push(val);
						} else {
							if (day?.list?.length >= this.quantity) {
								if (new Date(currentDate).getDay() == 0) {
									currentDate = this.nextSaturday(currentDate);
								} else {
									currentDate.setDate(currentDate.getDate() + 1);
								}
							}
							var info = {
								day: new Date(currentDate).toISOString().split('T')[0],
								list: [val]
							};
							this.days.push(info);
						}
					} else {
						currentDate.setHours(0, 0, 0);
						var info = {
							day: new Date(currentDate).toISOString().split('T')[0],
							list: [val]
						};
						this.days.push(info);
					}

				})
			}
			var maxDay = this.days.reduce((prev, current) => (prev.y > current.y) ? prev : current);
			this.numDaysToWatch = Math.ceil((<any>new Date(maxDay?.day) - <any>new Date(this.dateStart)) / (1000 * 60 * 60 * 24)) + 1;

			setTimeout(() => {
				_.next();
			}, 1000)
		}).subscribe(_ => {
			this.loading = false;
		})
	}

}

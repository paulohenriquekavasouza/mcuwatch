import { Component, OnInit } from '@angular/core';
import shows from '../../assets/shows.json';
import movies from '../../assets/movies.json';
import oneshots from '../../assets/oneshots.json';
import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from './interfaces/movies.interface';
import { IShows } from './interfaces/shows.interface';
import { IOneShots } from './interfaces/oneshots.interface';

@Component({
	selector: 'app-organizer',
	templateUrl: './organizer.component.html',
	styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

	shows: IShows[] = shows;
	movies: IMovie[] = movies;
	oneshots: IOneShots[] = oneshots;
	language: string = "";
	moviesChecked = true;
	showsChecked = true;
	ssuChecked = false;
	foxChecked = false;
	netflixChecked = false;
	oneShotsChecked = false;
	isChronological = 1;
	result: any = [];
	loading = false;
	minDate = new Date();
	dateStart: any;
	frequency = 0;
	frequencyAfterGenerate = 0;
	quantity = 0;
	days: any = [];
	selectedMovie: any;

	constructor(public appService: AppService,
		public translate: TranslateService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private modalService: NgbModal) {
		this.appService.getLanguage().subscribe(val => {
			this.language = val;
			this.translate.use(val);
		});
		this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() + 1));
		this.dateStart = this.minDate;

		this.activatedRoute.queryParamMap.subscribe((val: any) => {
			val = val?.params;
			if (val?.moviesChecked) {
				this.moviesChecked = val?.moviesChecked === 'true';
				this.showsChecked = val?.showsChecked === 'true';
				this.oneShotsChecked = val?.oneShotsChecked === 'true';
				this.ssuChecked = val?.ssuChecked === 'true';
				this.foxChecked = val?.foxChecked === 'true';
				this.netflixChecked = val?.netflixChecked === 'true';
				this.isChronological = val?.isChronological === 'true' ? 2 : 1;
				this.frequency = parseInt(val?.frequency);
				this.quantity = parseInt(val?.quantity);
				this.minDate = new Date(val?.minDate);
				this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() + 1));

				this.generate(0);
			}
		});
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
		return this.frequency > 0 && this.quantity > 0 /*&& (this.moviesChecked || this.showsChecked)*/;
	}

	generate(timeOut = 1000) {
		this.loading = true;
		this.days = [];
		this.frequencyAfterGenerate = this.frequency;
		new Observable(_ => {
			// NOW THE FUN STARTS
			var tempResult: any = [];

			if (this.moviesChecked) {
				this.movies?.map((x: IMovie) => {
					if (!x?.producer) {
						tempResult.push(x)
					}
				});
			}
			if (this.ssuChecked) {
				this.movies?.map((x: IMovie) => {
					if (x?.producer === 'sony') {
						tempResult.push(x);
					}
				});
			}
			if (this.foxChecked) {
				this.movies?.map((x: IMovie) => {
					if (x?.producer === 'fox') {
						tempResult.push(x);
					}
				});
			}
			if (this.showsChecked) {
				this.shows?.map((x: any) => x?.seasons?.map((y, index) => y?.episodes?.map((z, indexb) => {
					z.isSpecialPresentation = x?.isSpecialPresentation;
					z.showTitles = x?.titles;
					z.season = index + 1;
					z.episode = indexb + 1;
					if (!x?.producer) {
						tempResult.push(z);
					}
				})));
			}
			if (this.netflixChecked) {
				this.shows?.map((x: any) => x?.seasons?.map((y, index) => y?.episodes?.map((z, indexb) => {
					z.showTitles = x?.titles;
					z.season = index + 1;
					z.episode = indexb + 1;
					if (x?.producer === 'netflix') {
						z.producer = 'netflix';
						tempResult.push(z);
					}
				})));
			}

			if (this.oneShotsChecked) {
				this.oneshots?.map((x: any) => tempResult.push(x));
			}

			if (this.isChronological == 1) {
				// RELEASE ORDER
				// NOW WE ORDER IT BY RELEASE ORDER
				tempResult.sort((a: any, b: any) => (a?.releaseDate < b?.releaseDate ? -1 : 1));
			} else {
				// CHRONOLOGICAL ORDER
				// NOW WE ORDER IT BY CHRONOLOGICAL ORDER
				tempResult.sort((a: any, b: any) => (b?.orders?.chronologicalOrder > a?.orders?.chronologicalOrder ? -1 : 1));
			}

			this.result = tempResult;

			// MOVIES AND SHOWS ORDERED, NOW WE'RE GOING TO SPLIT IT IN DAYS
			if (this.frequency == 1) {
				// EVERYDAY
				var currentDate = new Date(this.dateStart);

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
				});
			} else {
				// ONLY WEEKENDS
				var currentDate = new Date(this.dateStart);

				if (currentDate.getDay() >= 0 && currentDate.getDay() <= 5) {
					currentDate = this.nextSaturday(new Date(this.dateStart));
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
				});
			}

			this.days?.forEach(day => {
				var titlesNotInTheaters = day?.list?.filter(x => !x?.theaters);
				day.totalTime = titlesNotInTheaters?.reduce((acc, obj) => acc + obj?.runtime?.minutes, 0);
			});

			setTimeout(() => {
				_.next();

				if (timeOut != 0) {
					var minDate = new Date(new Date(this.minDate).setDate(this.minDate.getDate() - 1));
					minDate.setHours(20, 59, 59);
					this.router.navigate(['/organizer'], { queryParams: { moviesChecked: this.moviesChecked, showsChecked: this.showsChecked, oneShotsChecked: this.oneShotsChecked, netflixChecked: this.netflixChecked, ssuChecked: this.ssuChecked, foxChecked: this.foxChecked, isChronological: this.isChronological == 2 ? true : false, frequency: this.frequency, quantity: this.quantity, minDate: minDate?.toISOString() } });
				}
			}, timeOut)
		}).subscribe(_ => {
			this.loading = false;
		})
	}

}

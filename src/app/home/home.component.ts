import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(public appService: AppService,
		public translate: TranslateService) {
		this.appService.getLanguage().subscribe(val => {
			this.translate.use(val);
		});
	}

	ngOnInit(): void {
	}

}

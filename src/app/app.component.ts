import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'MCUWatchOrganizer';
	language: string = "";

	constructor(public appService: AppService,
		public translate: TranslateService) {
		this.appService.getLanguage().subscribe(val => {
			this.language = val;
			this.translate.use(val);
		});
		translate.addLangs(['en-US', 'pt-BR']);
	}
}

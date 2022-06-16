import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	language = new BehaviorSubject<string>("en-US");

	constructor() { }

	setLanguage(val: string) {
		this.language.next(val);
	}

	getLanguage() {
		return this.language.asObservable();
	}
}

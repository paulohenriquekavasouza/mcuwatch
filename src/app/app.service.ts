import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	language = new BehaviorSubject<string>(localStorage.getItem("language") || "en-US");

	constructor() { }

	setLanguage(val: string) {
		this.language.next(val);
		localStorage.setItem("language", val);
	}

	getLanguage() {
		return this.language.asObservable();
	}
}

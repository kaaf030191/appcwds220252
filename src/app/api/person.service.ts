import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class PersonService {
	constructor(
		private httpClient: HttpClient
	) {}

	public insert(): Observable<any> {
		return this.httpClient.get('http://localhost:8080/person/insert');
	}
}
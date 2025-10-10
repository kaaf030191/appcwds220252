import { Component } from '@angular/core';
import { PersonService } from '../../../api/person.service';

@Component({
	selector: 'app-person-insert',
	imports: [],
	templateUrl: './person-insert.html',
	styleUrl: './person-insert.css'
})

export class PersonInsert {
	data: any = {};

	constructor(
		private personService: PersonService
	) {}

	clickButton(): void {
		this.personService.insert().subscribe({
			next: (response: any) => {
				this.data = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}
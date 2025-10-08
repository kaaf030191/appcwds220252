import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './api/person.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.html',
	styleUrl: './app.css'
})

export class App {
	constructor(
		private personService: PersonService
	) {}

	ngOnInit(): void {
		this.personService.insert().subscribe({
			next: (response: any) => {
				console.log(response);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}
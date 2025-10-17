import { Component, TemplateRef } from '@angular/core';
import { PersonService } from '../../../api/person.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdvertisingSection } from '../../../component/advertising-section/advertising-section';

@Component({
	selector: 'app-person-insert',
	imports: [
		AdvertisingSection
	],
	templateUrl: './person-insert.html',
	styleUrl: './person-insert.css',
	providers: [
		BsModalService
	]
})

export class PersonInsert {
	firstName: string = 'Kevin Arnold';
	mySuscription: string = '';
	data: any = {};

	constructor(
		private personService: PersonService,
		private modalService: BsModalService
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

	getOutputSuscription(dataObject: any): void {
		this.mySuscription = `${dataObject.fullName} ${dataObject.suscriptionType}`;
	}

	showModal(myModal: TemplateRef<any>): void {
		this.modalService.show(myModal);
	}

	closeModal(): void {
		this.modalService.hide();
	}
}
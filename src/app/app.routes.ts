import { Routes } from '@angular/router';
import { PersonInsert } from './page/person/person-insert/person-insert';
import { PersonGetAll } from './page/person/person-get-all/person-get-all';

export const routes: Routes = [
	{ path: 'person/insert', component: PersonInsert },
	{ path: 'person/getall', component: PersonGetAll }
];

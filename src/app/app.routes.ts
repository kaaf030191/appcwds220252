import { Routes } from '@angular/router';
import { PersonInsert } from './page/person/person-insert/person-insert';
import { PersonGetAll } from './page/person/person-get-all/person-get-all';
import { UserLogin } from './page/user/login/user-login';

export const routes: Routes = [
	{ path: 'user/login', component: UserLogin },
	{ path: 'person/insert', component: PersonInsert },
	{ path: 'person/getall', component: PersonGetAll }
];

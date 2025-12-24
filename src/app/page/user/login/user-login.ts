import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../api/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-login',
	imports: [
		ReactiveFormsModule
	],
	templateUrl: './user-login.html',
	styleUrl: './user-login.css'
})

export class UserLogin {
	formUser: FormGroup;

	get emailFb() { return this.formUser.controls['email']; }
	get passwordFb() { return this.formUser.controls['password']; }

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService
	) {
		this.formUser = this.formBuilder.group({
			'email': [null, []],
			'password': [null, []]
		});
	}

	sendFormLogin(): void {
		let formData = new FormData();

		formData.append('userName', this.emailFb.value);
		formData.append('password', this.passwordFb.value);

		this.userService.login(formData).subscribe({
			next: (response: any) => {
				if(response.token != undefined) {
					localStorage.setItem('jwtValue', response.token);

					this.router.navigate(['/person/getall']);
				}
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AlertService } from '../../services/alert.service';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name: String; username: String; email: String; password: String; MsjAlert: String; confirmPassword: String; emailValidate: boolean = true; 
  passValidate: boolean = true; MsjAlertPass: String;
	
  constructor(
	private alert : AlertService,
	private validateService : ValidateService,
  private router: Router,
  private authService : AuthService) { }

	ngOnInit() {}
  onRegisterSubmit(){
  	const user={
  		name: this.name,
  		email: this.email,
  		username: this.username,
  		password: this.password
  	}
    if(this.validateService.val_not_empty(user) != "") {
      let msj = this.validateService.val_not_empty(user);
      this.alert.fnAlertEmptyImput(msj);
      return false;
    }
        // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.alert.fnAlert("GOOD!","success",'You are now registered and can log in',3000,false);
        this.router.navigate(['/sign_in']);
      } else {
        this.alert.fnAlert("ERROR","error",'Something went wrong',3000,false);
        this.router.navigate(['/sign_up']);
      }
    });
  }
  fnValidateEmail(){
    let condition = this.validateService.val_Email(this.email);
    if(!condition.success) {
      this.MsjAlert= condition.msj;
      this.emailValidate = false;
    }else{
      this.emailValidate = true;
    }
  }
  fnComparePass(){
    let condition = this.validateService.val_pass_equal(this.password , this.confirmPassword);
    if(!condition.success) {
      this.MsjAlertPass = condition.msj;
      this.passValidate = false;
    }else{
      this.passValidate = true;
    }
  }
}

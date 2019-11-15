import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/model/User';
import { AuthenticationService } from 'app/services/authentication.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: User;
  isRegister: boolean = false;
  txtError: string = "";
  @Input() parent :any;
  constructor(
    private auth: AuthenticationService,
    private activeModel: NgbActiveModal,
    private router: Router

  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  setRegister() {
    this.isRegister = !this.isRegister;
    this.txtError = "";
    this.user = new User();
  }

  login() {
    debugger;
    this.txtError = "";
    this.auth.login(this.user.email, this.user.password).subscribe(data => {
      alert('sucess');
      localStorage.setItem('auth-token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('userId', data.userId);
      
      if (data.role == "admin") {
        this.activeModel.close();
        this.router.navigateByUrl('store');
      }
      else {
        this.parent.setLogin();
        this.activeModel.close();
      }

    }, error => {
     debugger;
      this.txtError = error.error.message;
    })
  }
  register() {
    this.txtError = "";
    this.auth.register(this.user).subscribe(data => {
      alert('sucess');
      this.setRegister();
      console.log(data);
    }, error => {
      alert('fail');
      this.txtError = error;
    })
  }

}

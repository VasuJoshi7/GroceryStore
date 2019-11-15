import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from 'app/shared/signin/signin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'topnavbar-cmp',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(
    private authenticationService: AuthenticationService,
    private modalService: NgbModal,
    private router: Router
  ) {
    var userid = localStorage.getItem("userId");
    if (userid == null) {
      this.isLogin = false;
    }
    else {
      var userRole = localStorage.getItem("role");
      if (userRole == "admin") {
        this.router.navigateByUrl('store');

      }
      this.isLogin = true;
    }

  }

  ngOnInit() {
  }


  logout() {
    this.isLogin = this.authenticationService.logout();

  }

  login() {
    const modal = this.modalService.open(SigninComponent);
    modal.componentInstance.parent = this;
  }

  setLogin() {
    this.isLogin = !this.isLogin;
  }

}

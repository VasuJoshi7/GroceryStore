import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItem = [
    // { name: "Dashboard", href: "dashboard" },
    // { name: "Payable", href: "payable" },
    // { name: "Receivables", href: "user" },
    // { name: "Payment Methods", href: "#" },
    // { name: "Settings", href: "#" },
    { name: "order", href: "order" },
    { name: "product", href: "product" },
    { name: "users", href: "users" },


  ]
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {




  }

  Logout() {
    this.authService.logout();
    this.router.navigateByUrl('home');

  }

}

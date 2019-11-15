import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  redirect(mainCategory: string) {
    localStorage.setItem('mainCategory', mainCategory);
    this.router.navigateByUrl('/subcategory');
  }
}

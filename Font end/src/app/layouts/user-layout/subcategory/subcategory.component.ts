import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product/product.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})


export class SubcategoryComponent implements OnInit {
  productList: any = [];
  categryName: string = "";

  constructor(
    private productService: ProductService
    , private router: Router
  ) {
    this.categryName = localStorage.getItem('mainCategory');

  }

  ngOnInit() {
    debugger;
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    debugger;
    this.productService.GetProductByCategory(this.categryName).subscribe(data => {
      this.productList = data;
      // this.productList = [
      //   { "img": "c1.png", "price": 250, "discPrice": 300, "description": ["first", "second", "third"] },
      //   { "img": "c2.png", "price": 250, "discPrice": 300, "description": ["first", "second", "third"] },
      //   { "img": "c3.png", "price": 250, "discPrice": 300, "description": ["first", "second", "third"] }
      // ]
      console.log(this.productList);
    },
      error => {
        alert("error");
        console.log(error);
      })
  }

  OrderClick(id) {
    debugger;
    var userId = localStorage.getItem("userId");
    if ( userId == null)
      alert("please login to buy product")
    else
      this.router.navigate(['./orders'], { queryParams: { productId: id } });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'app/services/product/product.service';

import { OrdersService } from 'app/services/Orders/orders.service';
import { Orders } from 'app/model/Orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private sub: any;
  ProductID: number;
  objOrder = new Orders();
  orders: any = [];
  constructor(private route: ActivatedRoute
    , private router: Router
    , private productService: ProductService
    , private OrderService: OrdersService
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ProductID = params['productId'];
        this.loadProductById(this.ProductID);
      });
  }

  loadProductById(ProductID) {
    debugger;
    this.productService.GetProductById(ProductID).subscribe(data => {
      debugger;
      this.orders = data[0];
      this.objOrder.ProductId = ProductID
      console.log(this.orders);
    },
      error => {
        alert("error");
        console.log(error);
      })
  }

  OrderSaveClick() {
    debugger;
    var isLogin = localStorage.getItem("userId");
    if (isLogin != null) {
      this.objOrder.ProductId = this.ProductID;
      this.objOrder.Price = this.orders.price
      this.objOrder.Quantity = 2
      this.objOrder.TotalAmount = this.objOrder.Quantity * this.objOrder.Price;
      this.objOrder.createdBy = localStorage.getItem("userId");
      this.OrderService.CreateOrder(this.objOrder).subscribe(data => {
        debugger;
        alert('Order created successfully');
        console.log(this.orders);
        this.router.navigateByUrl('index');
      },
        error => {
          alert("error");
          console.log(error);
        })
    }
    else {
      alert('please login');
    }

  }

}

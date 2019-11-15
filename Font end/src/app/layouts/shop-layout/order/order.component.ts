import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'app/services/Orders/orders.service';
import { Orders } from 'app/model/Orders';
import { OrderaddeditComponent } from '../modal/orderaddedit/orderaddedit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'app/services/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  objOrder = new Orders();
  orders: any = [];
  constructor(private OrderService: OrdersService
    , private modalService: NgbModal
    , private productService: ProductService) { }

  ngOnInit() {
    debugger
    this.getAllOrder();
  }
  getAllOrder() {
    this.OrderService.GetAllOrder().subscribe(data => {
      debugger;
      this.orders = data;
      this.objOrder.ProductId = this.orders.productId
      console.log(this.orders);
    },
      error => {
        alert("error");
        console.log(error);
      })
  }
  OrderDetete(id) {
    debugger;
    var isTrue = confirm("Press a button!")
    if (isTrue) {
      this.OrderService.DeleteOrder(id).subscribe(data => {
        alert('sucessfully deleted');
        this.getAllOrder();
      },
        error => {
          console.log(error);
        })
    }
    else {

    }
  }

  OrderEdit(id: number) {
    const modelref = this.modalService.open(OrderaddeditComponent, { backdrop: "static" });
    modelref.componentInstance.id = id;
    modelref.componentInstance.parent = this;
    console.log(id);

  }

}

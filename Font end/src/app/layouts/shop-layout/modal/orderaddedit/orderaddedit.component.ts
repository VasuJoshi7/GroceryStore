import { Component, OnInit, Input } from '@angular/core';
import { Orders } from 'app/model/Orders';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'app/services/cartegory/category.service';
import { ProductService } from 'app/services/product/product.service';
import { OrdersService } from 'app/services/Orders/orders.service';

@Component({
  selector: 'app-orderaddedit',
  templateUrl: './orderaddedit.component.html',
  styleUrls: ['./orderaddedit.component.scss']
})
export class OrderaddeditComponent implements OnInit {
  objOrder: Orders;
  user: any;
  @Input() id: any = null;
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public categoryService: CategoryService,
    public orderService: OrdersService

  ) { 
    this.objOrder = new Orders();
  }

  ngOnInit() {
    if (this.id != null)
      this.orderService.GetOrderById(this.id).subscribe(data => {
        debugger;
        this.objOrder=data[0];
        console.log(this.objOrder);

      },
        error => {
          alert('failed to laod order details');
        })

  }

}

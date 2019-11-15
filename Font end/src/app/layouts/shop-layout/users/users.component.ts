import { Component, OnInit } from '@angular/core';
import { AddeditUsersComponent } from '../modal/addedit-users/addedit-users.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private modalService: NgbModal,) { }

  ngOnInit() {
  //   debugger
  //   this.OrderService.GetAllOrder().subscribe(data => {
  //     debugger;
  //     this.orders = data;
  //     this.objOrder.ProductId = this.orders.productId
  //     console.log(this.orders);
  //   },
  //     error => {
  //       alert("error");
  //       console.log(error);
  //     })
  // }
  }
  addEdit(id: number) {
    const modelref = this.modalService.open(AddeditUsersComponent, { backdrop: "static" });
    modelref.componentInstance.id = id;
    modelref.componentInstance.parent = this;
    console.log(id);

  }
  deleteUser(id)
  {
    debugger
    confirm('are you sure you want to delete this user.');
    
  }
}

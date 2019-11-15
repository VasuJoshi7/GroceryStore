import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addedit-users',
  templateUrl: './addedit-users.component.html',
  styleUrls: ['./addedit-users.component.scss']
})
export class AddeditUsersComponent implements OnInit {
  ovbjUser: User;
  user: any;
  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal,) { }

  ngOnInit() {
    this.ovbjUser= new User();
  }

}

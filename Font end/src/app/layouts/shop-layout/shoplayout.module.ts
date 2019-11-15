
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShopRoutes } from './shoplayout.routing';
import { ShoplayoutComponent } from './shoplayout.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddeditproductComponent } from './modal/addeditproduct/addeditproduct.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AddeditUsersComponent } from './modal/addedit-users/addedit-users.component';
import { OrderaddeditComponent } from './modal/orderaddedit/orderaddedit.component';
import { UsersComponent } from './users/users.component';


@NgModule({
declarations:[
ShoplayoutComponent,
ProductComponent,
OrderComponent,
SidenavComponent,
SidebarComponent,
AddeditproductComponent,
UsersComponent,
AddeditUsersComponent,
OrderaddeditComponent,

],
imports:[
    RouterModule.forChild(ShopRoutes),
    FormsModule,
    CommonModule,
    NgbModule,
    BrowserModule
],
exports: [SidenavComponent],
entryComponents:[AddeditproductComponent,AddeditUsersComponent,OrderaddeditComponent]
})

export class ShoplayoutModule {}
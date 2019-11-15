import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserRoutes } from './user-layout.routing';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms';




@NgModule({
declarations:[
   HomeComponent,
   ProductComponent,
   SubcategoryComponent,
   CheckoutComponent,
   UserLayoutComponent,
   TopnavbarComponent,
   OrdersComponent,
   
],
imports:[
    RouterModule.forChild(UserRoutes),
    NgbModule,
    CommonModule,
    FormsModule
    
],
exports:[]
})

export class UserLayoutModule{ }
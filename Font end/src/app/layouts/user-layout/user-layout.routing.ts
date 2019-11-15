import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { UserLayoutComponent } from './user-layout.component';
import { OrdersComponent } from './orders/orders.component';


export const UserRoutes: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'product', component: ProductComponent },
            { path: 'subcategory', component: SubcategoryComponent },
            { path: 'orders', component: OrdersComponent },
        ]
    },


];
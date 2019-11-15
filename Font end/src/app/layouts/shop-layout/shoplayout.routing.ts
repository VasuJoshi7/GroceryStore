
import { Routes } from '@angular/router';
import { ShoplayoutComponent } from './shoplayout.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from 'app/services/auth.guard';



export const ShopRoutes: Routes = [
    {
        path: 'store',
        component: ShoplayoutComponent,
        canActivate:[AuthGuard],
        children : [
            {path:'',component:OrderComponent},
            {path:'order',component:OrderComponent},
            {path:'product',component:ProductComponent},
            {path:'users',component:UsersComponent}

        ]
    }
];
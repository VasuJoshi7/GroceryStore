import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TopnavbarComponent } from './topnavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ TopnavbarComponent ],
    exports: [ TopnavbarComponent ]
})

export class TopNavbarModule {}

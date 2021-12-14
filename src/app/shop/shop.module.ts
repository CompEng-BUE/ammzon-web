import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsComponent } from './items/items.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HomePageComponent,
    ItemDetailsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    ToastModule
  ]
})
export class ShopModule { }

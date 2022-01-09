import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { DataViewComponent } from './data-view/data-view.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StepsModule } from 'primeng/steps';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    HomePageComponent,
    ItemDetailsComponent,
    DataViewComponent,
    CartComponent,
    WishlistComponent,
    ShippingComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    ImageModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    RippleModule,
    StepsModule,
    InputTextareaModule,
    ScrollPanelModule,
  ]
})
export class ShopModule { }

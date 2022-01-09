import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product-service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any;
  cart_products: any;

  items: MenuItem[] = [
    {label: 'Cart Items'},
    {label: 'Shipping'},
    {label: 'Payment'},
    {label: 'Confirmation'}
  ];

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.cart_products = this.products.filter((product:any) => {
      return this.productsService.current_user.cart_list.some(p => p.id == product.id);
    })
  }

  ngOnInit(): void {
  }
}

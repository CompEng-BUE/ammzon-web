import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  products: any;
  wishlist_products: any;

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.wishlist_products = this.products.filter((product:any) => {
      return this.productsService.current_user.fav_list.includes(product.id);
    })
  }

  ngOnInit(): void {
  }

}

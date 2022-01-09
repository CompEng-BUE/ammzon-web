import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  product: any;
  relatedProducts: any;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));

    var products = this.productsService.products;
    this.product = products.find(product => product.id == itemIdFromRoute);
    this.relatedProducts = products;

    // this.productsService.products.subscribe((products) => {
    //   this.product = products.find(product => product.id == itemIdFromRoute);
    //   this.relatedProducts = [products[0], products[1], products[2]];
    // })
  }
  addToFav(product_id: number) {
    this.productsService.toggle_fav(product_id)
    // this.messageService.add({severity:'error', summary:'Success', detail: '"' + product.name + '" added to wishlist'});
  }

  addToCart(product_id: number) {
    this.productsService.add_to_cart(product_id);
    // this.messageService.add({ severity: 'warn', summary: 'Success', detail: '"' + product.name + '" added to cart successfully' });
  }

  plus(product_id: number) {
    this.productsService.plus(product_id);
  }

  minus(product_id: number) {
    this.productsService.minus(product_id);
  }

  get_fav(product_id: number) {
    return this.productsService.get_fav(product_id);
  }

  get_count(product_id: number) {
    return this.productsService.get_count(product_id);
  }
}

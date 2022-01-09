import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: any;
  filtered_products: any;
  layout = "grid";
  show_header = true;

  constructor(private productsService: ProductsService) {
    this.products = productsService.products;
    this.productsService.search_text.subscribe((search_text) => {
      this.layout = search_text == ""? "grid": "list";
      this.show_header = search_text == "";
      this.filtered_products = this.products.filter((product:any) => {
        return product.name.toLowerCase().includes(search_text.toLowerCase());
      })
    })
  }

  ngOnInit(): void {
  }

}

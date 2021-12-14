import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [1, 2, 3, 4, 5, 6, 7];


  products = [
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"INSTOCK", amount:0, fav: false, img: "de0_nano.jfif", count: 0},
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"OUTOFSTOCK", amount:0, fav: false, img: "arduino_mega.jpg", count: 0},
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"OUTOFSTOCK", amount:0, fav: false, img: "raspberry_pi.jpg", count: 0},
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"LOWSTOCK", amount:0, fav: false, img: "fpga.jpg", count: 0},
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"INSTOCK", amount:0, fav: false, img: "de0_nano.jfif", count: 0},
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"OUTOFSTOCK", amount:0, fav: false, img: "arduino_mega.jpg", count: 0},
    {name:"product name", description: "product description", rating:3, category:"category X", price:50, inventoryStatus:"OUTOFSTOCK", amount:0, fav: false, img: "raspberry_pi.jpg", count: 0},
  ]

  addToFav(product:any) {
    product.fav = !product.fav;
  }

  addToCart(product:any) {
    product.count = 1;
  }

  plus(product:any) {
    product.count += 1
  }

  minus(product:any) {
    product.count -= 1
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  
  x1:any
  x2:any
  x3:any
  x4:any
  x5:any

  items: MenuItem[] = [
    {label: 'Cart Items'},
    {label: 'Shipping'},
    {label: 'Payment'},
    {label: 'Confirmation'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

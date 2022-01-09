import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

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

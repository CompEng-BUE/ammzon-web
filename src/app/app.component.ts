import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    // {icon: 'pi pi-home'},
    {label: 'ammzon'},
    {label: 'Shop'},
    {label: 'All categories'},
  ];
}

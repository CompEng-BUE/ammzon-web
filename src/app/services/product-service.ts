import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    public products: Product[]  = [
        { id: 1, name: "DE0-nano FPGA Board", description: "this is a brief description about the product", rating: 3, category: "category X", price: 2500, inventoryStatus: "INSTOCK", img: "de0_nano.jfif" },
        { id: 2, name: "Arduino Mega", description: "this is a brief description about the product", rating: 4, category: "category X", price: 300, price_before:450, inventoryStatus: "INSTOCK", img: "arduino_mega.jpg" },
        { id: 3, name: "Raspberry Pi", description: "this is a brief description about the product", rating: 2, category: "category X", price: 1500, price_before:1700, inventoryStatus: "OUTOFSTOCK", img: "raspberry_pi.jpg" },
        { id: 4, name: "FPGA Kit", description: "this is a brief description about the product", rating: 1, category: "category X", price: 3800, price_before:4000, inventoryStatus: "OUTOFSTOCK", img: "fpga.jpg" },
        { id: 5, name: "DE0 nano", description: "this is a brief description about the product", rating: 5, category: "category X", price: 2500, price_before:3000, inventoryStatus: "INSTOCK", img: "de0_nano.jfif" },
        { id: 6, name: "Arduino Mega", description: "this is a brief description about the product", rating: 0, category: "category X", price: 300, price_before:400, inventoryStatus: "LOWSTOCK", img: "arduino_mega.jpg" },
        { id: 7, name: "Raspberry Pi", description: "this is a brief description about the product", rating: 3, category: "category X", price: 1500, price_before:1550, inventoryStatus: "LOWSTOCK", img: "raspberry_pi.jpg" },
    ];

    users: User[] = [];
    current_user_index: number = 0;
    public current_user: User;

    public search_text = new BehaviorSubject('');

    constructor() {
        // localStorage.setItem('users', JSON.stringify([new User]));
        this.users = JSON.parse(localStorage.getItem('users')!)

        // localStorage.setItem('current_user', JSON.stringify(0));
        this.current_user_index = JSON.parse(localStorage.getItem('current_user')!)

        this.current_user = this.users[this.current_user_index];
    }

    toggle_fav(product_id: number) {
        if (this.current_user.fav_list.includes(product_id))
            this.current_user.fav_list.forEach((element, index) => {
                if (element == product_id) this.current_user.fav_list.splice(index, 1);
            });
        else
            this.current_user.fav_list.push(product_id);

        localStorage.setItem('users', JSON.stringify(this.users));
    }

    add_to_cart(product_id: number) {
        this.current_user.cart_list.push({id: product_id, count: 1});
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    plus(product_id: number) {
        this.current_user.cart_list.forEach((element) => {if (element.id == product_id) element.count += 1});
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    minus(product_id: number) {
        this.current_user.cart_list.forEach((element, index) => {
            if (element.id == product_id) {
                element.count -= 1;
                if (element.count <= 0) this.current_user.cart_list.splice(index, 1);
            };
        });
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    get_fav(product_id: number) {
        return this.current_user.fav_list.includes(product_id);
    }

    get_count(product_id: number) {
        var c = 0
        this.current_user.cart_list.forEach((element) => {if (element.id == product_id) c = element.count});
        return c;    
    }

    get_n_cart_items() {
        var n = 0;
        this.current_user.cart_list.forEach((element) => {
            n += element.count;
        })
        return n;
    }

    get_total_cart_items() {
        var total = 0;
        this.current_user.cart_list.forEach((element) => {
            var price = 0;
            this.products.forEach((e) => {
                if (element.id == e.id) price = e.price;
            })
            total += (element.count * price);
        })
        return total;
    }
}

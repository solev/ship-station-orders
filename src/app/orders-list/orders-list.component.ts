import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../core/orders/orders.service';
import { Orders, Order } from '../core/orders/order';

@Component({
  selector: 'app-orders-list',
  providers: [OrdersService],
  templateUrl: './orders-list.component.html'
})
export class OrdersListComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  orders: Array<Order> = [];
  displayOrders: Array<Order> = [];
  loading = true;
  sortValue = null;
  sortKey = null;
  search: string;

  sortValues = {
    'ascend': 'ASC',
    'descend': 'DESC'
  }

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = this.sortValues[sort.value];
    
    this.applyFilters();
  }

  /**
   * This is used for demo data - local filtering and sorting
   * This should not exist in production, since all of this operations will happen on the API side
   */
  applyFilters(): void {
    let orders = [...this.orders];

    if (this.search) {
      orders = orders.filter(order => order.billTo.name.toLocaleLowerCase().indexOf(this.search.toLowerCase()) != -1);
    }    

    if (this.sortKey && this.sortValue) {
      const data = orders.sort((a, b) => (this.sortValue === 'ASC') ? (a[this.sortKey] > b[this.sortKey] ? 1 : -1) : (b[this.sortKey] > a[this.sortKey] ? 1 : -1));
      orders = [...data];
    }    

    this.displayOrders = orders;
  }

  getOrders(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;

    this.orderService.getOrders(this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.search).subscribe((res: Orders) => {
      this.loading = false;
      this.total = res.total;
      this.orders = res.orders;

      for (var i = 0; i < 100; i++) {
        let copy = Object.assign({}, res.orders[i % res.orders.length]);
        this.orders.push(copy);
      }

      for (var k = 0; k < this.orders.length; k++) {
        this.orders[k].orderKey = `${(k + 1)}`;
      }

      this.displayOrders = [...this.orders];
    })
  }


}

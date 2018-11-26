import { Injectable } from '@angular/core';
import { ShipStationApi } from '../api/ship-station.service';
import { Observable } from 'rxjs';
import { Orders } from './order';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class OrdersService {

    constructor(private api: ShipStationApi) {

    }

    getOrders(pageIndex, pageSize, sortBy?: string, sortDir?: string, customerName?:string): Observable<Orders> {
        var params = new HttpParams()
            .append("page", pageIndex)
            .append("pageSize", pageSize)

        if (sortDir) {
            params = params
                .append("sortBy", sortBy)
                .append("sortDir", sortDir);
        }

        if(customerName){
            params = params
            .append("customerName", customerName)
        }


        return this.api.get(`/orders`, params) as Observable<Orders>;
    }

}
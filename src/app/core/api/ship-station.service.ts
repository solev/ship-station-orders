import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class ShipStationApi {

    key: string = "yuoiwlx";
    secret: string = "85kkjzkdjwk";

    // baseUrl: string = "https://ssapi.shipstation.com";
    baseUrl: string = "https://private-anon-4036543300-shipstation.apiary-mock.com";

    constructor(private http: HttpClient) {

    }

    getAuthToken(): string {
        let combined = `${this.key}:${this.secret}`;
        return `Basic ${btoa(combined)}`;
    }

    getHeaders(): HttpHeaders {

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.getAuthToken()
        });

        return headers;
    }

    get(url: string, params?: HttpParams) {
        return this.http.get(this.baseUrl + url, {
            headers: this.getHeaders(),
            params: params
        });
    }

}
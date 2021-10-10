import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Dashboard } from "../models/model";
@Injectable({
    providedIn: "root"
})

export class DashboardService {
    constructor( private readonly http: HttpClient) {
    }

    getItems() {
        const path = 'assets/json/dashboard.json'
        return this.http.request<Dashboard>('GET',path);
    }
}
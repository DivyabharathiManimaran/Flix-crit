import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
@Injectable({
    providedIn: "root"
})

export class DashboardService {
    constructor( private readonly http: HttpClient) {
    }

    getItems() {
        const path = '../../../assets/json/dashboard.json'
        return this.http.request('GET',path);
    }
}
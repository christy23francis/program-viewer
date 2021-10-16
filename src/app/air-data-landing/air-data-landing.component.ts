import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-data-landing',
  templateUrl: './air-data-landing.component.html',
  styleUrls: ['./air-data-landing.component.scss']
})
export class AirDataLandingComponent implements OnInit {

  data: any;
  searchText: any;
  displayData: any;

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem('data') == undefined) {
      this.http.get<any>('https://api.tvmaze.com/schedule?country=US').subscribe(data => {
        this.data = data;
        sessionStorage.setItem('data', JSON.stringify(this.data));
      });
    } else {
      this.data = JSON.parse(sessionStorage.getItem('data') || '{}');
      this.displayData = this.data;
    }

  }

  ngOnInit(): void {
  }

  onSearch(){
    let result = this.data.filter((o:any) => (o.id == this.searchText) || (o.name == this.searchText));
    this.displayData = result;
  }
  reset() {
    this.displayData = this.data;
  }

}

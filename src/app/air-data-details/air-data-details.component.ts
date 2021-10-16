import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-air-data-details',
  templateUrl: './air-data-details.component.html',
  styleUrls: ['./air-data-details.component.scss']
})
export class AirDataDetailsComponent implements OnInit {
  data: any;
  item: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.data = JSON.parse(sessionStorage.getItem('data') || '{}');
  }

  ngOnInit(): void {
    if (this.data && this.data.length !==( 0 || undefined)) {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id');
      });
      this.item = this.data.find((o:any) => o.id == this.id);
    }
    if (!this.item || !this.data) {
      this.router.navigate(['']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainsreturn',
  templateUrl: './trainsreturn.component.html',
  styleUrls: ['./trainsreturn.component.css']
})
export class TrainsreturnComponent implements OnInit {
  timetableTlTpe: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const urlTlTpe = 'https://rata.digitraffic.fi/api/v1/live-trains/station/TL/TPE?limit=25';
    this.http.get(urlTlTpe).subscribe((data: any) => {
      console.log(data);
      this.timetableTlTpe = data;
    });
  }

}

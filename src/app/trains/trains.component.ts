import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  timetableTpeTl: any[];
  timetableTlTpe: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const urlTlTpe = 'https://rata.digitraffic.fi/api/v1/live-trains/station/TL/TPE';
    const urlTpeTL = 'https://rata.digitraffic.fi/api/v1/live-trains/station/TPE/TL';
    this.http.get(urlTpeTL).subscribe((data: any) => {
      console.log(data);
      this.timetableTpeTl = data;
    });
    this.http.get(urlTlTpe).subscribe((data: any) => {
      console.log(data);
      this.timetableTlTpe = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  timetableTpeTl: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const urlTpeTL = 'https://rata.digitraffic.fi/api/v1/live-trains/station/TPE/TL?limit=25';
    this.http.get(urlTpeTL).subscribe((data: any) => {
      console.log(data);
      this.timetableTpeTl = data;
    });
  }
}

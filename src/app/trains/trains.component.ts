import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}

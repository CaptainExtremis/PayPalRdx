import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
  providers: [DatePipe]
})
export class MessagingComponent implements OnInit {

  constructor() { }
  today = new Date();

  ngOnInit(): void {
  }

}

import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewChecked {

  constructor() { }
  ngAfterViewChecked(): void {
    // Data Picker Initialization
    // @ts-ignore
    $('.datepicker').datepicker({ inline: true });
  }

  ngOnInit(): void {
  }

}

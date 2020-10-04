import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {

  @Input() locationID: string;

  constructor() { }

  ngOnInit(): void {
  }

}

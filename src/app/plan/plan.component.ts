import { Component, Input, OnInit } from '@angular/core';
import { Plan } from './plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {

  @Input() public plan?: Plan = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

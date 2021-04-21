import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { Plan } from './plan';
import { PlanStatus } from './plan-status';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {

  @Input() public plan?: Plan = undefined;
  @Output() public planBought: EventEmitter<Plan> = new EventEmitter<Plan>();
  @Output() public boughtCanceled: EventEmitter<Plan> = new EventEmitter<Plan>();

  unavailable: boolean = false;
  bought: boolean = false;
  planStatus: typeof PlanStatus = PlanStatus;

  constructor() { }

  ngOnInit(): void {
    console.log('init');
    this.unavailable = this.plan?.status === PlanStatus.unavailable;
    this.bought = this.plan?.status === PlanStatus.bought;
  }

  buy(): void {
    if (!this.plan) {
      return;
    }
    this.planBought.emit(this.plan);
  }

  cancel(): void {
    if (!this.plan) {
      return;
    }
    this.boughtCanceled.emit(this.plan);
  }
}

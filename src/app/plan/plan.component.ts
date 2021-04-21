import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  planStatus: typeof PlanStatus = PlanStatus;

  constructor() { }

  ngOnInit(): void {
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

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plan } from '../plan/plan';
import { PlanStatus } from '../plan/plan-status';
import data from '../plan/plans.data.json';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {

  private plans: Plan[] = [];
  constructor() {
    this.loadPlans();
  }

  loadPlans(): void {
    this.plans = data;
  }

  getByPage(page: number): Plan[] {
    const pageSize: number = environment.pageSize;
    const startIndex: number = (page - 1) * pageSize;
    return this.plans.slice(startIndex, startIndex + pageSize);
  }

  buyPlan(plan: Plan): void {
    this.plans.forEach((p: Plan) => {
      if (plan.id === p.id) {
        p.status = PlanStatus.bought;
      } else {
        p.status = PlanStatus.unavailable;
      }
    });
  }

  cancel(): void {
    this.plans.forEach((p: Plan) => p.status = PlanStatus.available);
  }
}

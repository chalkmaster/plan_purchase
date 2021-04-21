import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../plan/plan';
import { PlanStatus } from '../plan/plan-status';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  static fakeData: Plan[] = [
    new Plan('plan_starter', 'STARTER', 'Starter features for your business to grow.', 1, '#979797'),
    new Plan('plan_regular', 'REGULAR', 'Regular features for your business to grow.', 25, '#3B86FF'),
    new Plan('plan_professional', 'PROFESSIONAL', 'Professional features for your business to grow.', 75,
      '#8B68EE'),
    new Plan('plan_ultimate', 'ULTIMATE', 'Ultimate features for your business to grow.', 115, '#EE3541'),
  ];
  plans?: Plan[];
  page: number = 1;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const data: { page: number } = this.route.snapshot.data as { page: number };
    this.page = data.page;
    this.boundData(this.page);
  }

  boundData(page: number): void {
    const pagesize: number = 2;
    const startIndex: number = page * pagesize;
    this.plans = PageComponent.fakeData?.slice(startIndex, startIndex + pagesize);
  }

  planBought(plan: Plan): void {
    console.log('bought', plan);
    PageComponent.fakeData.forEach((p: Plan) => {
      if (p.id !== plan.id) {
        p.status = PlanStatus.unavailable;
      } else {
        p.status = PlanStatus.bought;
      }
    });
    this.boundData(this.page);
  }

  boughtCanceled(_: Plan): void {
    PageComponent.fakeData.forEach((p: Plan) => p.status = PlanStatus.available);
  }

}

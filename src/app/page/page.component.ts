import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../plan/plan';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  fakeData: Plan[] = [
    new Plan('plan_starter', 'STARTER', 'Starter features for your business to grow.', 1, '#979797'),
    new Plan('plan_regular', 'REGULAR', 'Regular features for your business to grow.', 25, '#3B86FF'),
    new Plan('plan_professional', 'PROFESSIONAL', 'Professional features for your business to grow.', 75,
      '#8B68EE'),
    new Plan('plan_ultimate', 'ULTIMATE', 'Ultimate features for your business to grow.', 115, '#EE3541'),
  ];
  plans?: Plan[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const data: { page: number } = this.route.snapshot.data as { page: number };
    const pagesize: number = 2;
    const page: number = data.page * pagesize;
    this.plans = this.fakeData?.slice(page, page + pagesize);
  }

}

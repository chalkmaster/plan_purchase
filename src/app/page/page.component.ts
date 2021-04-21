import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../plan/plan';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  public plans?: Plan[];

  constructor(private route: ActivatedRoute,
              private purchaseService: PurchaseService) {
  }

  ngOnInit(): void {
    const data: { page: number } = this.route.snapshot.data as { page: number };
    this.loadData(data.page);
  }

  loadData(page: number): void {
    this.plans = this.purchaseService.getByPage(page);
  }

  planBought(plan: Plan): void {
    this.purchaseService.buyPlan(plan);
  }

  boughtCanceled(_: Plan): void {
    this.purchaseService.cancel();
  }

}

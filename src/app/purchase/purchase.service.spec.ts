import { TestBed } from '@angular/core/testing';
import { Plan } from '../plan/plan';
import { PlanStatus } from '../plan/plan-status';

import { PurchaseService } from './purchase.service';

describe('PurchaseService', () => {
  let service: PurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get plans by page', () => {
    spyOn(service, 'getPlans').and.returnValue([
      { id: '1', name: 'plan1', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '2', name: 'plan2', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '3', name: 'plan3', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '4', name: 'plan4', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '5', name: 'plan5', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '6', name: 'plan6', description: 'desc', value: 1, color: '#ffff', status: 0 },
    ]);
    const pageOne: Plan[] = service.getByPage(1);
    expect(pageOne.length).toBe(2);
    expect(pageOne[0].id).toBe('1');
    expect(pageOne[1].id).toBe('2');
    const pageThree: Plan[] = service.getByPage(3);
    expect(pageThree.length).toBe(2);
    expect(pageThree[0].id).toBe('5');
    expect(pageThree[1].id).toBe('6');
  });

  it('should update plans when bought one', () => {
    const planToBuy: Plan
      = { id: '1', name: 'plan1', description: 'desc', value: 1, color: '#ffff', status: 0 };
    spyOn(service, 'getPlans').and.returnValue([
      planToBuy,
      { id: '2', name: 'plan2', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '3', name: 'plan3', description: 'desc', value: 1, color: '#ffff', status: 0 },
    ]);
    service.buyPlan(planToBuy);
    expect(planToBuy.status).toBe(PlanStatus.bought);
    expect(service.getPlans().filter((p: Plan) => p.status === PlanStatus.bought).length).toBe(1);
    expect(service.getPlans().filter((p: Plan) => p.status === PlanStatus.unavailable).length).toBe(2);
  });

  it('should update plans when bought one', () => {
    const planToCancel: Plan
      = { id: '1', name: 'plan1', description: 'desc', value: 1, color: '#ffff', status: 1 };
    spyOn(service, 'getPlans').and.returnValue([
      planToCancel,
      { id: '2', name: 'plan2', description: 'desc', value: 1, color: '#ffff', status: 0 },
      { id: '3', name: 'plan3', description: 'desc', value: 1, color: '#ffff', status: 0 },
    ]);
    expect(planToCancel.status).toBe(PlanStatus.bought);
    service.cancel();
    expect(planToCancel.status).toBe(PlanStatus.available);
    expect(service.getPlans().filter((p: Plan) => p.status === PlanStatus.bought).length).toBe(0);
    expect(service.getPlans().filter((p: Plan) => p.status === PlanStatus.available).length).toBe(3);
  });
});

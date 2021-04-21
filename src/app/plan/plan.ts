import { PlanStatus } from './plan-status';

export class Plan {
  constructor(
    public id: string = '',
    public name: string = '',
    public description: string = '',
    public value: number = 0.0,
    public color: string = '',
    public status: PlanStatus = PlanStatus.available,
  ) { }
}

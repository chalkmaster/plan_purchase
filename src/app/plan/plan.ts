import { PlanState } from './plan-state';

export class Plan {
  constructor(
    public id: string = '',
    public name: string = '',
    public description: string = '',
    public value: number = 0.0,
    public color: string = '',
    public state: PlanState = PlanState.available,
  ) { }
}

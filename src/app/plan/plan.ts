import { PlanStatus } from './plan-status';

export interface Plan {
  id: string;
  name: string;
  description: string;
  value: number;
  color: string;
  status: PlanStatus;
}

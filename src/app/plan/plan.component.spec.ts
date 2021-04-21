import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanComponent } from './plan.component';

describe('PlanComponent', () => {
  let component: PlanComponent;
  let fixture: ComponentFixture<PlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render plan name', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 0,
    };
    fixture.detectChanges();
    const nameElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-name');
    expect(nameElement).not.toBeNull();
    expect(nameElement?.innerHTML).toEqual('STARTER');
  });

  it('should render plan value for available plan', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 0,
    };
    fixture.detectChanges();
    const valueElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-value');
    expect(valueElement).not.toBeNull();
    expect(valueElement?.innerHTML).toEqual('$1');
  });

  it('should render plan value for unavailable plan', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 2,
    };
    fixture.detectChanges();
    const valueElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-value');
    expect(valueElement).not.toBeNull();
    expect(valueElement?.innerHTML).toEqual('$1');
  });

  it('should not render plan value for bought plan', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 1,
    };
    fixture.detectChanges();
    const valueElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-value');
    expect(valueElement).not.toBeNull();
    expect(valueElement?.innerHTML).not.toEqual('$1');
  });

  it('should render bought info for bought plan', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 1,
    };
    fixture.detectChanges();
    const valueElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-value');
    expect(valueElement).not.toBeNull();
    expect(valueElement?.innerHTML).toEqual('BOUGHT!');
  });

  it('should call buy function when click on Buy button', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    spyOn(component, 'buy');

    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 0,
    };
    fixture.detectChanges();

    const buttonElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-action-button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement?.innerHTML).toBe('BUY');
    buttonElement?.click();
    fixture.detectChanges();
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(component.buy).toHaveBeenCalled();
  });

  it('should call cancel function when click on cancel button', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    spyOn(component, 'cancel');

    component.plan = {
      id: 'plan_starter',
      name: 'STARTER',
      description: 'Starter features for your business to grow.',
      value: 1.0,
      color: '#979797',
      status: 1,
    };
    fixture.detectChanges();

    const buttonElement: HTMLSpanElement | null = nativeElement.querySelector('.plan-content-action-button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement?.innerHTML).toBe('CANCEL');
    buttonElement?.click();
    fixture.detectChanges();
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(component.cancel).toHaveBeenCalled();
  });
});

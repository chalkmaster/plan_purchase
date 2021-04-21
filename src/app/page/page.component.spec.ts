import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PurchaseService } from '../purchase/purchase.service';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  const mockedPurchaseService: jasmine.SpyObj<PurchaseService>
    = jasmine.createSpyObj<PurchaseService>(['getByPage', 'buyPlan', 'cancel']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: PurchaseService, useValue: mockedPurchaseService },
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture: ComponentFixture<PageComponent> = TestBed.createComponent(PageComponent);
    const component: PageComponent = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render plans', () => {
    mockedPurchaseService.getByPage.and.returnValue([
      {
        id: 'plan_starter',
        name: 'STARTER',
        description: 'Starter features for your business to grow.',
        value: 1.0,
        color: '#979797',
        status: 0,
      },
    ]);
    const fixture: ComponentFixture<PageComponent> = TestBed.createComponent(PageComponent);
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.querySelector('app-plan')).not.toBeNull();
  });

  it('should render as plans as availabe', () => {
    mockedPurchaseService.getByPage.and.returnValue([
      {
        id: 'plan_starter',
        name: 'STARTER',
        description: 'Starter features for your business to grow.',
        value: 1.0,
        color: '#979797',
        status: 0,
      },
      {
        id: 'plan_starter2',
        name: 'STARTER2',
        description: 'Starter2 features for your business to grow.',
        value: 2.0,
        color: '#979797',
        status: 0,
      },
    ]);
    const fixture: ComponentFixture<PageComponent> = TestBed.createComponent(PageComponent);
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.querySelectorAll('app-plan').length).toEqual(2);
  });

  it('should call purchase event on service', () => {
    const fixture: ComponentFixture<PageComponent> = TestBed.createComponent(PageComponent);
    fixture.detectChanges();
    const component: PageComponent = fixture.componentInstance;
    component.planBought({
      id: 'plan_starter3',
      name: 'STARTER3',
      description: 'Starter3 features for your business to grow.',
      value: 2.0,
      color: '#979797',
      status: 0,
    });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedPurchaseService.buyPlan).toHaveBeenCalled();
  });

  it('should call purchase cancel event on service', () => {
    const fixture: ComponentFixture<PageComponent> = TestBed.createComponent(PageComponent);
    fixture.detectChanges();
    const component: PageComponent = fixture.componentInstance;
    component.boughtCanceled({
      id: 'plan_starter3',
      name: 'STARTER3',
      description: 'Starter3 features for your business to grow.',
      value: 2.0,
      color: '#979797',
      status: 0,
    });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedPurchaseService.cancel).toHaveBeenCalled();
  });
});

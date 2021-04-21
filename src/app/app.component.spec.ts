import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'plan-purchase\'', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app.title).toEqual('plan-purchase');
  });

  it('should render the toolbar', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.querySelector('app-toolbar')).not.toBeNull();
  });

  it('should render router outlet area', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    expect(nativeElement.querySelector('router-outlet')).not.toBeNull();
  });
});

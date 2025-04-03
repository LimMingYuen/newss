import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IfxUfeModule } from 'ifx-ufe';
import { provideRouter } from '@angular/router';
import { UfeAppRootComponent } from './ufe-root/ufe-root.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfxUfeModule, UfeAppRootComponent, AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it(`should have the 'ifx-ufe-demo-app2' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.ufeName).toEqual('ifx-ufe-demo-app3');
  });
});

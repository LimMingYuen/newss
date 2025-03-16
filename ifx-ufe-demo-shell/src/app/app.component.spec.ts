import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IfxUfeModule } from 'ifx-ufe';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfxUfeModule, AppComponent],
       providers: [
              provideRouter([])
          ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ifx-ufe-demo-shell' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.ufeName).toEqual('ifx-ufe-demo-shell');
  });
});

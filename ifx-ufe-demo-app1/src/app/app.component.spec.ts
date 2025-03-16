import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IfxUfeModule, WebResourceService } from 'ifx-ufe';
import { UfeAppRootComponent } from './ufe-root/ufe-root.component';
import { provideRouter } from '@angular/router';


describe('AppComponent', () => {
  let wrlServiceSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfxUfeModule, UfeAppRootComponent, AppComponent],
      providers: [
        provideRouter([])
    ],
    }).compileComponents();

    const wrlService = TestBed.inject(WebResourceService);
    wrlServiceSpy= jest.spyOn(wrlService, 'initWrl');
    wrlServiceSpy.mockImplementation(() => Promise.resolve());
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ifx-ufe-demo-app1' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.ufeName).toEqual('ifx-ufe-demo-app1');
    expect(wrlServiceSpy).toHaveBeenCalled();
  });
});

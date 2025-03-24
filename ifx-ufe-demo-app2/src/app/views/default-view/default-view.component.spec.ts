import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultViewComponent } from './default-view.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DefaultViewComponent', () => {
  let component: DefaultViewComponent;
  let fixture: ComponentFixture<DefaultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultViewComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

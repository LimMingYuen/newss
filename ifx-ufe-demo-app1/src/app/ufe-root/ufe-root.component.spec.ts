import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfeAppRootComponent } from './ufe-root.component';

describe('UfeAppRootComponent', () => {
  let component: UfeAppRootComponent;
  let fixture: ComponentFixture<UfeAppRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfeAppRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UfeAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

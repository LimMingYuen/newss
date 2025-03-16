import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellRootComponent } from './shell-root.component';

describe('ShellComponent', () => {
  let component: ShellRootComponent;
  let fixture: ComponentFixture<ShellRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

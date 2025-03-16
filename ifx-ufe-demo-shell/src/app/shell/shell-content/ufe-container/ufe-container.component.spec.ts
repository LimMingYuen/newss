import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfeContainerComponent } from './ufe-container.component';
import { AppDescription, IfxUfeModule } from 'ifx-ufe';
import { provideRouter } from '@angular/router';

describe('UfeContainerComponent', () => {
  let component: UfeContainerComponent;
  let fixture: ComponentFixture<UfeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfeContainerComponent, IfxUfeModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UfeContainerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('ufeApp', new AppDescription());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

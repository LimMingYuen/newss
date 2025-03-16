import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectorComponent } from './view-selector.component';
import { createSpyObj, SpyObj } from '@ifx/testing';
import { ShellViewSelectorService } from '../../shell-view-selector.service';
import { DataCommunicationService, UfeCommand } from 'ifx-ufe';
import { BehaviorSubject } from 'rxjs';


describe('ViewSelectorComponent', () => {
  let component: ViewSelectorComponent;
  let fixture: ComponentFixture<ViewSelectorComponent>;
  let mockShellViewSelectorService: SpyObj<ShellViewSelectorService>;
  let mockDataCommunicationService: SpyObj<DataCommunicationService>;
  let mockUfeCommands: BehaviorSubject<UfeCommand>;

  beforeEach(async () => {
    mockShellViewSelectorService= createSpyObj('ShellViewSelectorService' ,{});
    mockUfeCommands = new BehaviorSubject<UfeCommand>(new UfeCommand());
    mockDataCommunicationService = createSpyObj('DataCommunicationService', {
      ufeCommands: mockUfeCommands.asObservable(),
    });

    await TestBed.configureTestingModule({
      imports: [ViewSelectorComponent],
      providers: [
         { provide: Window, useValue: window } ,
         { provide: mockShellViewSelectorService, useValue: mockShellViewSelectorService },
         { provide: DataCommunicationService, useValue: mockDataCommunicationService },
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

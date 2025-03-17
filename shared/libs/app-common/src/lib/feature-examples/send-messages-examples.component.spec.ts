import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessagesExamplesComponent } from './send-messages-examples.component';
import { DataCommunicationService, UfeCommand } from 'ifx-ufe';
import { BehaviorSubject } from 'rxjs';
import { createSpyObj, SpyObj } from '@ifx/testing';

describe('SendMessagesExamplesComponent', () => {
  let component: SendMessagesExamplesComponent;
  let fixture: ComponentFixture<SendMessagesExamplesComponent>;
  let mockDataCommunicationService: SpyObj<DataCommunicationService>;
  let mockUfeCommands: BehaviorSubject<UfeCommand>;

  beforeEach(async () => {
    mockUfeCommands = new BehaviorSubject<UfeCommand>(new UfeCommand());
    mockDataCommunicationService = createSpyObj('DataCommunicationService', {
      ufeCommands: mockUfeCommands.asObservable(),
    });

    await TestBed.configureTestingModule({
      imports: [SendMessagesExamplesComponent],
      providers: [
        { provide: Window, useValue: window },
        { provide: DataCommunicationService, useValue: mockDataCommunicationService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SendMessagesExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

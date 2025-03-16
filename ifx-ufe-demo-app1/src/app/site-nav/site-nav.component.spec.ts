import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavComponent } from './site-nav.component';
import { DataCommunicationService, UfeCommand } from 'ifx-ufe';
import { createSpyObj, SpyObj } from '@ifx/testing';
import { BehaviorSubject } from 'rxjs';

describe('SiteNavComponent', () => {
  let component: SiteNavComponent;
  let fixture: ComponentFixture<SiteNavComponent>;
  let mockDataCommunicationService: SpyObj<DataCommunicationService>;
  let mockUfeCommands: BehaviorSubject<UfeCommand>;

  beforeEach(async () => {
    mockUfeCommands = new BehaviorSubject<UfeCommand>(new UfeCommand());
    mockDataCommunicationService = createSpyObj('DataCommunicationService', {
      ufeCommands: mockUfeCommands.asObservable(),
    });

    await TestBed.configureTestingModule({
      imports: [SiteNavComponent],
      providers: [
        { provide: Window, useValue: window },
        { provide: DataCommunicationService, useValue: mockDataCommunicationService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

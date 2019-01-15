import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubscriberListComponent } from './emailsubscriber-list.component';

describe('EmailsubscriberListComponent', () => {
  let component: EmailsubscriberListComponent;
  let fixture: ComponentFixture<EmailsubscriberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsubscriberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsubscriberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

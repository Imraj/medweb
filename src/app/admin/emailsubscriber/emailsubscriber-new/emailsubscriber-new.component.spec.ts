import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubscriberNewComponent } from './emailsubscriber-new.component';

describe('EmailsubscriberNewComponent', () => {
  let component: EmailsubscriberNewComponent;
  let fixture: ComponentFixture<EmailsubscriberNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsubscriberNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsubscriberNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

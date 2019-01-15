import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubscriberComponent } from './emailsubscriber.component';

describe('EmailsubscriberComponent', () => {
  let component: EmailsubscriberComponent;
  let fixture: ComponentFixture<EmailsubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

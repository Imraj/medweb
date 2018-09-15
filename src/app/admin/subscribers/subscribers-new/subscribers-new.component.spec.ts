import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersNewComponent } from './subscribers-new.component';

describe('SubscribersNewComponent', () => {
  let component: SubscribersNewComponent;
  let fixture: ComponentFixture<SubscribersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

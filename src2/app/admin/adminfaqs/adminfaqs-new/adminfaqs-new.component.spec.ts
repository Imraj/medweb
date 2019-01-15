import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfaqsNewComponent } from './adminfaqs-new.component';

describe('AdminfaqsNewComponent', () => {
  let component: AdminfaqsNewComponent;
  let fixture: ComponentFixture<AdminfaqsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfaqsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfaqsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

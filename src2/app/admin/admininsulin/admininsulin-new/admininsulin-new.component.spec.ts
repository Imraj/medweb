import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininsulinNewComponent } from './admininsulin-new.component';

describe('AdmininsulinNewComponent', () => {
  let component: AdmininsulinNewComponent;
  let fixture: ComponentFixture<AdmininsulinNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininsulinNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininsulinNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

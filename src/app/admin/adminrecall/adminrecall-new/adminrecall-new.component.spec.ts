import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecallNewComponent } from './adminrecall-new.component';

describe('AdminrecallNewComponent', () => {
  let component: AdminrecallNewComponent;
  let fixture: ComponentFixture<AdminrecallNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrecallNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrecallNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

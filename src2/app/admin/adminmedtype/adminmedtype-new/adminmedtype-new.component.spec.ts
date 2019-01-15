import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmedtypeNewComponent } from './adminmedtype-new.component';

describe('AdminmedtypeNewComponent', () => {
  let component: AdminmedtypeNewComponent;
  let fixture: ComponentFixture<AdminmedtypeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmedtypeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmedtypeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

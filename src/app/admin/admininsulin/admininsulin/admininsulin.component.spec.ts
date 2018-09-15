import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininsulinComponent } from './admininsulin.component';

describe('AdmininsulinComponent', () => {
  let component: AdmininsulinComponent;
  let fixture: ComponentFixture<AdmininsulinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininsulinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininsulinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

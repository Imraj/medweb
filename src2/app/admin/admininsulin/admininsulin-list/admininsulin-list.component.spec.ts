import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininsulinListComponent } from './admininsulin-list.component';

describe('AdmininsulinListComponent', () => {
  let component: AdmininsulinListComponent;
  let fixture: ComponentFixture<AdmininsulinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininsulinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininsulinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

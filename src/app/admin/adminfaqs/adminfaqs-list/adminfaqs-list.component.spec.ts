import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfaqsListComponent } from './adminfaqs-list.component';

describe('AdminfaqsListComponent', () => {
  let component: AdminfaqsListComponent;
  let fixture: ComponentFixture<AdminfaqsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfaqsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfaqsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

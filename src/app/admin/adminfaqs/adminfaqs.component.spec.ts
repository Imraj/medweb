import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfaqsComponent } from './adminfaqs.component';

describe('AdminfaqsComponent', () => {
  let component: AdminfaqsComponent;
  let fixture: ComponentFixture<AdminfaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

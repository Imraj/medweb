import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmedtypeListComponent } from './adminmedtype-list.component';

describe('AdminmedtypeListComponent', () => {
  let component: AdminmedtypeListComponent;
  let fixture: ComponentFixture<AdminmedtypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmedtypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmedtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

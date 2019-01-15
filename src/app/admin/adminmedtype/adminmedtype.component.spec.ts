import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmedtypeComponent } from './adminmedtype.component';

describe('AdminmedtypeComponent', () => {
  let component: AdminmedtypeComponent;
  let fixture: ComponentFixture<AdminmedtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmedtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

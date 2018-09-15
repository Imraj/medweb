import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintermsComponent } from './adminterms.component';

describe('AdmintermsComponent', () => {
  let component: AdmintermsComponent;
  let fixture: ComponentFixture<AdmintermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

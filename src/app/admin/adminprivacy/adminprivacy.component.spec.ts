import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprivacyComponent } from './adminprivacy.component';

describe('AdminprivacyComponent', () => {
  let component: AdminprivacyComponent;
  let fixture: ComponentFixture<AdminprivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminprivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

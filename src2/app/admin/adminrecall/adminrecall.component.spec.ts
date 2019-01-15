import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecallComponent } from './adminrecall.component';

describe('AdminrecallComponent', () => {
  let component: AdminrecallComponent;
  let fixture: ComponentFixture<AdminrecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsubscriptionComponent } from './adminsubscription.component';

describe('AdminsubscriptionComponent', () => {
  let component: AdminsubscriptionComponent;
  let fixture: ComponentFixture<AdminsubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

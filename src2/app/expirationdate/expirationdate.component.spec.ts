import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationdateComponent } from './expirationdate.component';

describe('ExpirationdateComponent', () => {
  let component: ExpirationdateComponent;
  let fixture: ComponentFixture<ExpirationdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirationdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirationdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

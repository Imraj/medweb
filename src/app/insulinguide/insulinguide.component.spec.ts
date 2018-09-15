import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulinguideComponent } from './insulinguide.component';

describe('InsulinguideComponent', () => {
  let component: InsulinguideComponent;
  let fixture: ComponentFixture<InsulinguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsulinguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsulinguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

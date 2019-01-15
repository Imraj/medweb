import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecallsComponent } from './recalls.component';

describe('RecallsComponent', () => {
  let component: RecallsComponent;
  let fixture: ComponentFixture<RecallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

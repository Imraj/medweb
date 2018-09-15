import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersListComponent } from './subscribers-list.component';

describe('SubscribersListComponent', () => {
  let component: SubscribersListComponent;
  let fixture: ComponentFixture<SubscribersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

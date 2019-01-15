import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecallListComponent } from './adminrecall-list.component';

describe('AdminrecallListComponent', () => {
  let component: AdminrecallListComponent;
  let fixture: ComponentFixture<AdminrecallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrecallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrecallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

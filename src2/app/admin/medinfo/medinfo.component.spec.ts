import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedinfoComponent } from './medinfo.component';

describe('MedinfoComponent', () => {
  let component: MedinfoComponent;
  let fixture: ComponentFixture<MedinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

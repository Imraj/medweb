import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedinfoListComponent } from './medinfo-list.component';

describe('MedinfoListComponent', () => {
  let component: MedinfoListComponent;
  let fixture: ComponentFixture<MedinfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedinfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

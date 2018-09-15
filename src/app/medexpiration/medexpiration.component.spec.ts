import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedexpirationComponent } from './medexpiration.component';

describe('MedexpirationComponent', () => {
  let component: MedexpirationComponent;
  let fixture: ComponentFixture<MedexpirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedexpirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedexpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

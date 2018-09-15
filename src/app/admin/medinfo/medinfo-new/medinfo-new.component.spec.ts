import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedinfoNewComponent } from './medinfo-new.component';

describe('MedinfoNewComponent', () => {
  let component: MedinfoNewComponent;
  let fixture: ComponentFixture<MedinfoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedinfoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedinfoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

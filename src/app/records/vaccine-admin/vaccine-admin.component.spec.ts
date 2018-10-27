import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineAdminComponent } from './vaccine-admin.component';

describe('VaccineAdminComponent', () => {
  let component: VaccineAdminComponent;
  let fixture: ComponentFixture<VaccineAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

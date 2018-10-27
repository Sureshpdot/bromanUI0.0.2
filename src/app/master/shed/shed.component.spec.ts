import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedComponent } from './shed.component';

describe('ShedComponent', () => {
  let component: ShedComponent;
  let fixture: ComponentFixture<ShedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

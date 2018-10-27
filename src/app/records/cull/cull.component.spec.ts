import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CullComponent } from './cull.component';

describe('CullComponent', () => {
  let component: CullComponent;
  let fixture: ComponentFixture<CullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

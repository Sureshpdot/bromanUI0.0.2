import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedProgramComponent } from './feed-program.component';

describe('FeedProgramComponent', () => {
  let component: FeedProgramComponent;
  let fixture: ComponentFixture<FeedProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

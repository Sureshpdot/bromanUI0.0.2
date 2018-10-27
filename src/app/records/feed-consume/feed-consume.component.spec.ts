import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedConsumeComponent } from './feed-consume.component';

describe('FeedConsumeComponent', () => {
  let component: FeedConsumeComponent;
  let fixture: ComponentFixture<FeedConsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedConsumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

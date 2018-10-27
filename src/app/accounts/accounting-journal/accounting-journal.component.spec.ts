import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingJournalComponent } from './accounting-journal.component';

describe('AccountingJournalComponent', () => {
  let component: AccountingJournalComponent;
  let fixture: ComponentFixture<AccountingJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

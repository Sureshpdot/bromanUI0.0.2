import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryJournalComponent } from './inventory-journal.component';

describe('InventoryJournalComponent', () => {
  let component: InventoryJournalComponent;
  let fixture: ComponentFixture<InventoryJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEntry } from './reports-entry';

describe('ReportsEntry', () => {
  let component: ReportsEntry;
  let fixture: ComponentFixture<ReportsEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MViewTransactionsComponent } from './m-view-transactions.component';

describe('MViewTransactionsComponent', () => {
  let component: MViewTransactionsComponent;
  let fixture: ComponentFixture<MViewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MViewTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

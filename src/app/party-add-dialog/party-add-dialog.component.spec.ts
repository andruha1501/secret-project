import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyAddDialogComponent } from './party-add-dialog.component';

describe('PartyAddDialogComponent', () => {
  let component: PartyAddDialogComponent;
  let fixture: ComponentFixture<PartyAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

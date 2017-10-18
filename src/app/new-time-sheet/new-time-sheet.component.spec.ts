import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimeSheetComponent } from './new-time-sheet.component';

describe('NewTimeSheetComponent', () => {
  let component: NewTimeSheetComponent;
  let fixture: ComponentFixture<NewTimeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTimeSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

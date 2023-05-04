/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PivotEffortComponent } from './pivotEffort.component';

describe('PivotEffortComponent', () => {
  let component: PivotEffortComponent;
  let fixture: ComponentFixture<PivotEffortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotEffortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotEffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormUndoComponent } from './form-undo.component';

describe('FormUndoComponent', () => {
  let component: FormUndoComponent;
  let fixture: ComponentFixture<FormUndoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUndoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

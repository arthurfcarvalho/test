import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPluriComponent } from './finalizar-pluri.component';

describe('FinalizarPluriComponent', () => {
  let component: FinalizarPluriComponent;
  let fixture: ComponentFixture<FinalizarPluriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarPluriComponent]
    });
    fixture = TestBed.createComponent(FinalizarPluriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPluriComponent } from './listar-pluri.component';

describe('ListarPluriComponent', () => {
  let component: ListarPluriComponent;
  let fixture: ComponentFixture<ListarPluriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPluriComponent]
    });
    fixture = TestBed.createComponent(ListarPluriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

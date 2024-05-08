import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPluriComponent } from './cadastro-pluri.component';

describe('CadastroPluriComponent', () => {
  let component: CadastroPluriComponent;
  let fixture: ComponentFixture<CadastroPluriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPluriComponent]
    });
    fixture = TestBed.createComponent(CadastroPluriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

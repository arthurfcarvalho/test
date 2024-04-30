import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuirPerfisComponent } from './atribuir-perfis.component';

describe('AtribuirPerfisComponent', () => {
  let component: AtribuirPerfisComponent;
  let fixture: ComponentFixture<AtribuirPerfisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtribuirPerfisComponent]
    });
    fixture = TestBed.createComponent(AtribuirPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

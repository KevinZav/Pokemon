import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaComponent } from './grafica.component';

describe('GraficaComponent', () => {
  let component: GraficaComponent;
  let fixture: ComponentFixture<GraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

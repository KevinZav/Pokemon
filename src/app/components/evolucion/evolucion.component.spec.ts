import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionComponent } from './evolucion.component';

describe('EvolucionComponent', () => {
  let component: EvolucionComponent;
  let fixture: ComponentFixture<EvolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

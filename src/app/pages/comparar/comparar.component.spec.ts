import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararComponent } from './comparar.component';

describe('CompararComponent', () => {
  let component: CompararComponent;
  let fixture: ComponentFixture<CompararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

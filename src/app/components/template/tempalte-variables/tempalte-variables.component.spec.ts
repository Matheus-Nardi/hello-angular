import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteVariablesComponent } from './tempalte-variables.component';

describe('TempalteVariablesComponent', () => {
  let component: TempalteVariablesComponent;
  let fixture: ComponentFixture<TempalteVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempalteVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempalteVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

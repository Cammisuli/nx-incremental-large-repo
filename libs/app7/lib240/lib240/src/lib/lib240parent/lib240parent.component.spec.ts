import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib240parentComponent } from './lib240parent.component';

describe('Lib240parentComponent', () => {
  let component: Lib240parentComponent;
  let fixture: ComponentFixture<Lib240parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib240parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib240parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

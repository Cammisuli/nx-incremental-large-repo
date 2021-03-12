import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib211parentComponent } from './lib211parent.component';

describe('Lib211parentComponent', () => {
  let component: Lib211parentComponent;
  let fixture: ComponentFixture<Lib211parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib211parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib211parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

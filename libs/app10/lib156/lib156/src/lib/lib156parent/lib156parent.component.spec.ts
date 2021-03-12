import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib156parentComponent } from './lib156parent.component';

describe('Lib156parentComponent', () => {
  let component: Lib156parentComponent;
  let fixture: ComponentFixture<Lib156parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib156parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib156parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

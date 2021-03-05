import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib0parentComponent } from './lib27childlib0parent.component';

describe('Lib27childlib0parentComponent', () => {
  let component: Lib27childlib0parentComponent;
  let fixture: ComponentFixture<Lib27childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib68parentComponent } from './lib68parent.component';

describe('Lib68parentComponent', () => {
  let component: Lib68parentComponent;
  let fixture: ComponentFixture<Lib68parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib68parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib68parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

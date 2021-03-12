import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib362parentComponent } from './lib362parent.component';

describe('Lib362parentComponent', () => {
  let component: Lib362parentComponent;
  let fixture: ComponentFixture<Lib362parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib362parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib362parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

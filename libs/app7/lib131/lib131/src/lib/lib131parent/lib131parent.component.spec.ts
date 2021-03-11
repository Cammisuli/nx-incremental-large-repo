import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib131parentComponent } from './lib131parent.component';

describe('Lib131parentComponent', () => {
  let component: Lib131parentComponent;
  let fixture: ComponentFixture<Lib131parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib131parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib131parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

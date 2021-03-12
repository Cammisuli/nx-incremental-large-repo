import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib114parentComponent } from './lib114parent.component';

describe('Lib114parentComponent', () => {
  let component: Lib114parentComponent;
  let fixture: ComponentFixture<Lib114parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib114parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib114parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10parentComponent } from './lib10parent.component';

describe('Lib10parentComponent', () => {
  let component: Lib10parentComponent;
  let fixture: ComponentFixture<Lib10parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

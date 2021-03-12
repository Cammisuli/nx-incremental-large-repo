import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib261parentComponent } from './lib261parent.component';

describe('Lib261parentComponent', () => {
  let component: Lib261parentComponent;
  let fixture: ComponentFixture<Lib261parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib261parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib261parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

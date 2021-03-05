import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib65parentComponent } from './lib65parent.component';

describe('Lib65parentComponent', () => {
  let component: Lib65parentComponent;
  let fixture: ComponentFixture<Lib65parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib65parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib65parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

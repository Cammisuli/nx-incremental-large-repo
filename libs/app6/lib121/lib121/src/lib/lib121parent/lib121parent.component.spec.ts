import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib121parentComponent } from './lib121parent.component';

describe('Lib121parentComponent', () => {
  let component: Lib121parentComponent;
  let fixture: ComponentFixture<Lib121parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib121parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib121parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

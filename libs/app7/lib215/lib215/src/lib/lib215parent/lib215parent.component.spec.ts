import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib215parentComponent } from './lib215parent.component';

describe('Lib215parentComponent', () => {
  let component: Lib215parentComponent;
  let fixture: ComponentFixture<Lib215parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib215parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib215parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

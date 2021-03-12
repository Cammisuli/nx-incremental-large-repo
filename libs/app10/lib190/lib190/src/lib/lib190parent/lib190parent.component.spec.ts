import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib190parentComponent } from './lib190parent.component';

describe('Lib190parentComponent', () => {
  let component: Lib190parentComponent;
  let fixture: ComponentFixture<Lib190parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib190parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib190parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

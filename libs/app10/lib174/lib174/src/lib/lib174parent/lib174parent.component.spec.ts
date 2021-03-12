import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib174parentComponent } from './lib174parent.component';

describe('Lib174parentComponent', () => {
  let component: Lib174parentComponent;
  let fixture: ComponentFixture<Lib174parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib174parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib174parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

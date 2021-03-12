import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib179parentComponent } from './lib179parent.component';

describe('Lib179parentComponent', () => {
  let component: Lib179parentComponent;
  let fixture: ComponentFixture<Lib179parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib179parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib179parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

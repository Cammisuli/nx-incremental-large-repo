import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib345parentComponent } from './lib345parent.component';

describe('Lib345parentComponent', () => {
  let component: Lib345parentComponent;
  let fixture: ComponentFixture<Lib345parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib345parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib345parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

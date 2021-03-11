import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib150parentComponent } from './lib150parent.component';

describe('Lib150parentComponent', () => {
  let component: Lib150parentComponent;
  let fixture: ComponentFixture<Lib150parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib150parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib150parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

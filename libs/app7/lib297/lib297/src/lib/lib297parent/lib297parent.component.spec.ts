import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib297parentComponent } from './lib297parent.component';

describe('Lib297parentComponent', () => {
  let component: Lib297parentComponent;
  let fixture: ComponentFixture<Lib297parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib297parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib297parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

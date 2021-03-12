import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib237parentComponent } from './lib237parent.component';

describe('Lib237parentComponent', () => {
  let component: Lib237parentComponent;
  let fixture: ComponentFixture<Lib237parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib237parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib237parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

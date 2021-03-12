import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib269parentComponent } from './lib269parent.component';

describe('Lib269parentComponent', () => {
  let component: Lib269parentComponent;
  let fixture: ComponentFixture<Lib269parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib269parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib269parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

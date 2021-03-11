import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib52parentComponent } from './lib52parent.component';

describe('Lib52parentComponent', () => {
  let component: Lib52parentComponent;
  let fixture: ComponentFixture<Lib52parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib52parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib52parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

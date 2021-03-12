import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib208parentComponent } from './lib208parent.component';

describe('Lib208parentComponent', () => {
  let component: Lib208parentComponent;
  let fixture: ComponentFixture<Lib208parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib208parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib208parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

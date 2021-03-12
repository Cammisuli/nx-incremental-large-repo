import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib367parentComponent } from './lib367parent.component';

describe('Lib367parentComponent', () => {
  let component: Lib367parentComponent;
  let fixture: ComponentFixture<Lib367parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib367parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib367parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

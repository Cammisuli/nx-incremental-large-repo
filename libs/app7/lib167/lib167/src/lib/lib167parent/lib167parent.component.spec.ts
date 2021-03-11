import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib167parentComponent } from './lib167parent.component';

describe('Lib167parentComponent', () => {
  let component: Lib167parentComponent;
  let fixture: ComponentFixture<Lib167parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib167parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib167parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

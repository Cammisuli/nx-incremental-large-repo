import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib264parentComponent } from './lib264parent.component';

describe('Lib264parentComponent', () => {
  let component: Lib264parentComponent;
  let fixture: ComponentFixture<Lib264parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib264parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib264parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

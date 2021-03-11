import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11parentComponent } from './lib11parent.component';

describe('Lib11parentComponent', () => {
  let component: Lib11parentComponent;
  let fixture: ComponentFixture<Lib11parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

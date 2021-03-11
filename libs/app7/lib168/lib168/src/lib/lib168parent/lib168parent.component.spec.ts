import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib168parentComponent } from './lib168parent.component';

describe('Lib168parentComponent', () => {
  let component: Lib168parentComponent;
  let fixture: ComponentFixture<Lib168parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib168parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib168parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

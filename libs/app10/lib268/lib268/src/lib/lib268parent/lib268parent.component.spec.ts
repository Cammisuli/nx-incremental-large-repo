import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib268parentComponent } from './lib268parent.component';

describe('Lib268parentComponent', () => {
  let component: Lib268parentComponent;
  let fixture: ComponentFixture<Lib268parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib268parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib268parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

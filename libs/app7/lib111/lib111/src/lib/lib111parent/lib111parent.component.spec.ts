import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib111parentComponent } from './lib111parent.component';

describe('Lib111parentComponent', () => {
  let component: Lib111parentComponent;
  let fixture: ComponentFixture<Lib111parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib111parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib111parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib185parentComponent } from './lib185parent.component';

describe('Lib185parentComponent', () => {
  let component: Lib185parentComponent;
  let fixture: ComponentFixture<Lib185parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib185parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib185parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

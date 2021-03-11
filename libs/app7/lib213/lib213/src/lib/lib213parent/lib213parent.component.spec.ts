import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib213parentComponent } from './lib213parent.component';

describe('Lib213parentComponent', () => {
  let component: Lib213parentComponent;
  let fixture: ComponentFixture<Lib213parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib213parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib213parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

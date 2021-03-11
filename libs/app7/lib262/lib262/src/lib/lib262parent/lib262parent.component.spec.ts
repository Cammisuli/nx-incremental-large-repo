import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib262parentComponent } from './lib262parent.component';

describe('Lib262parentComponent', () => {
  let component: Lib262parentComponent;
  let fixture: ComponentFixture<Lib262parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib262parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib262parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

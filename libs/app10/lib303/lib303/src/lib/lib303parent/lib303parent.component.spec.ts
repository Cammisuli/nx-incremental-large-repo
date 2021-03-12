import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib303parentComponent } from './lib303parent.component';

describe('Lib303parentComponent', () => {
  let component: Lib303parentComponent;
  let fixture: ComponentFixture<Lib303parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib303parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib303parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

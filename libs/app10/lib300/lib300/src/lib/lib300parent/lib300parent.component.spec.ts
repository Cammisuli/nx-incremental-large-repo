import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib300parentComponent } from './lib300parent.component';

describe('Lib300parentComponent', () => {
  let component: Lib300parentComponent;
  let fixture: ComponentFixture<Lib300parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib300parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib300parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

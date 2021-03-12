import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib298parentComponent } from './lib298parent.component';

describe('Lib298parentComponent', () => {
  let component: Lib298parentComponent;
  let fixture: ComponentFixture<Lib298parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib298parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib298parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

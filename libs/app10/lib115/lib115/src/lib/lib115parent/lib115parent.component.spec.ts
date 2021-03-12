import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib115parentComponent } from './lib115parent.component';

describe('Lib115parentComponent', () => {
  let component: Lib115parentComponent;
  let fixture: ComponentFixture<Lib115parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib115parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib115parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

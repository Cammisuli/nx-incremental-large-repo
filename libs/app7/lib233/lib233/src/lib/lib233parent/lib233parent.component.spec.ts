import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib233parentComponent } from './lib233parent.component';

describe('Lib233parentComponent', () => {
  let component: Lib233parentComponent;
  let fixture: ComponentFixture<Lib233parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib233parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib233parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

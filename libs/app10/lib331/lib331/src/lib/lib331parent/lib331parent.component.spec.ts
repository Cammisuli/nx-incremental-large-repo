import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib331parentComponent } from './lib331parent.component';

describe('Lib331parentComponent', () => {
  let component: Lib331parentComponent;
  let fixture: ComponentFixture<Lib331parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib331parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib331parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

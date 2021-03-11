import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib122parentComponent } from './lib122parent.component';

describe('Lib122parentComponent', () => {
  let component: Lib122parentComponent;
  let fixture: ComponentFixture<Lib122parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib122parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib122parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

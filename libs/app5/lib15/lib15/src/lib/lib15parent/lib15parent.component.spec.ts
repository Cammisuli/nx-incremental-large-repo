import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15parentComponent } from './lib15parent.component';

describe('Lib15parentComponent', () => {
  let component: Lib15parentComponent;
  let fixture: ComponentFixture<Lib15parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

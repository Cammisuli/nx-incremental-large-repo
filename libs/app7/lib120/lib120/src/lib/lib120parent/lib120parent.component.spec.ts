import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib120parentComponent } from './lib120parent.component';

describe('Lib120parentComponent', () => {
  let component: Lib120parentComponent;
  let fixture: ComponentFixture<Lib120parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib120parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib120parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

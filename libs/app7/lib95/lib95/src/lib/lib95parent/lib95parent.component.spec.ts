import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib95parentComponent } from './lib95parent.component';

describe('Lib95parentComponent', () => {
  let component: Lib95parentComponent;
  let fixture: ComponentFixture<Lib95parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib95parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib95parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

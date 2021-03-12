import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib330parentComponent } from './lib330parent.component';

describe('Lib330parentComponent', () => {
  let component: Lib330parentComponent;
  let fixture: ComponentFixture<Lib330parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib330parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib330parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

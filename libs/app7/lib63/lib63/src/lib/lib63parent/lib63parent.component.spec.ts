import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib63parentComponent } from './lib63parent.component';

describe('Lib63parentComponent', () => {
  let component: Lib63parentComponent;
  let fixture: ComponentFixture<Lib63parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib63parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib63parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

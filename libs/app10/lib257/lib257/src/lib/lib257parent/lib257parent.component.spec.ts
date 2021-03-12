import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib257parentComponent } from './lib257parent.component';

describe('Lib257parentComponent', () => {
  let component: Lib257parentComponent;
  let fixture: ComponentFixture<Lib257parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib257parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib257parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

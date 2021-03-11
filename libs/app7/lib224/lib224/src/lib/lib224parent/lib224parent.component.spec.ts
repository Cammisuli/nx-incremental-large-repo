import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib224parentComponent } from './lib224parent.component';

describe('Lib224parentComponent', () => {
  let component: Lib224parentComponent;
  let fixture: ComponentFixture<Lib224parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib224parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib224parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

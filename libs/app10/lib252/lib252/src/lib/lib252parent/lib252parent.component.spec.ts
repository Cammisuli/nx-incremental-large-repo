import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib252parentComponent } from './lib252parent.component';

describe('Lib252parentComponent', () => {
  let component: Lib252parentComponent;
  let fixture: ComponentFixture<Lib252parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib252parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib252parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

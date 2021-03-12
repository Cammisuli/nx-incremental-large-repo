import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib113parentComponent } from './lib113parent.component';

describe('Lib113parentComponent', () => {
  let component: Lib113parentComponent;
  let fixture: ComponentFixture<Lib113parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib113parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib113parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

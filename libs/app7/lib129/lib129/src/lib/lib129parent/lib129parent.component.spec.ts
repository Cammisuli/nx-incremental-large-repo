import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib129parentComponent } from './lib129parent.component';

describe('Lib129parentComponent', () => {
  let component: Lib129parentComponent;
  let fixture: ComponentFixture<Lib129parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib129parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib129parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

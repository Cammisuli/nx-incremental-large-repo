import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib225parentComponent } from './lib225parent.component';

describe('Lib225parentComponent', () => {
  let component: Lib225parentComponent;
  let fixture: ComponentFixture<Lib225parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib225parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib225parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

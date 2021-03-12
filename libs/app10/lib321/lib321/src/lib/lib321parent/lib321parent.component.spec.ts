import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib321parentComponent } from './lib321parent.component';

describe('Lib321parentComponent', () => {
  let component: Lib321parentComponent;
  let fixture: ComponentFixture<Lib321parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib321parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib321parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

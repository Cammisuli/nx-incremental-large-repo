import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib186parentComponent } from './lib186parent.component';

describe('Lib186parentComponent', () => {
  let component: Lib186parentComponent;
  let fixture: ComponentFixture<Lib186parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib186parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib186parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

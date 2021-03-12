import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib306parentComponent } from './lib306parent.component';

describe('Lib306parentComponent', () => {
  let component: Lib306parentComponent;
  let fixture: ComponentFixture<Lib306parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib306parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib306parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

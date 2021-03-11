import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib195parentComponent } from './lib195parent.component';

describe('Lib195parentComponent', () => {
  let component: Lib195parentComponent;
  let fixture: ComponentFixture<Lib195parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib195parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib195parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

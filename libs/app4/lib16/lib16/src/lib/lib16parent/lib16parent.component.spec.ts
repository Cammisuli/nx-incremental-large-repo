import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16parentComponent } from './lib16parent.component';

describe('Lib16parentComponent', () => {
  let component: Lib16parentComponent;
  let fixture: ComponentFixture<Lib16parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib221parentComponent } from './lib221parent.component';

describe('Lib221parentComponent', () => {
  let component: Lib221parentComponent;
  let fixture: ComponentFixture<Lib221parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib221parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib221parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

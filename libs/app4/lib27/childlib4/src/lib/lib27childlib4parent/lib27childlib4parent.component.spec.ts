import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib4parentComponent } from './lib27childlib4parent.component';

describe('Lib27childlib4parentComponent', () => {
  let component: Lib27childlib4parentComponent;
  let fixture: ComponentFixture<Lib27childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

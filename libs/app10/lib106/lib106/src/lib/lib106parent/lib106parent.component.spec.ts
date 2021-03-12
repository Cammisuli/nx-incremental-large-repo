import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib106parentComponent } from './lib106parent.component';

describe('Lib106parentComponent', () => {
  let component: Lib106parentComponent;
  let fixture: ComponentFixture<Lib106parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib106parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib106parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

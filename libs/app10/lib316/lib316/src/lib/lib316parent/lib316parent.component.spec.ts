import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib316parentComponent } from './lib316parent.component';

describe('Lib316parentComponent', () => {
  let component: Lib316parentComponent;
  let fixture: ComponentFixture<Lib316parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib316parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib316parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

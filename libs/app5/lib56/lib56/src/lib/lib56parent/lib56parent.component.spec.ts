import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib56parentComponent } from './lib56parent.component';

describe('Lib56parentComponent', () => {
  let component: Lib56parentComponent;
  let fixture: ComponentFixture<Lib56parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib56parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib56parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

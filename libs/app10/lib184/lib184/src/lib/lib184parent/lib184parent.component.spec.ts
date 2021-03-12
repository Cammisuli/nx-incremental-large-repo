import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib184parentComponent } from './lib184parent.component';

describe('Lib184parentComponent', () => {
  let component: Lib184parentComponent;
  let fixture: ComponentFixture<Lib184parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib184parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib184parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

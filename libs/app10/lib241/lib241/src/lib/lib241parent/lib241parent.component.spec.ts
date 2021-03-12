import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib241parentComponent } from './lib241parent.component';

describe('Lib241parentComponent', () => {
  let component: Lib241parentComponent;
  let fixture: ComponentFixture<Lib241parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib241parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib241parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

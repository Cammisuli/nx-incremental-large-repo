import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib226parentComponent } from './lib226parent.component';

describe('Lib226parentComponent', () => {
  let component: Lib226parentComponent;
  let fixture: ComponentFixture<Lib226parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib226parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib226parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

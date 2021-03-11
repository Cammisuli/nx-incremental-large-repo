import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib158parentComponent } from './lib158parent.component';

describe('Lib158parentComponent', () => {
  let component: Lib158parentComponent;
  let fixture: ComponentFixture<Lib158parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib158parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib158parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib180parentComponent } from './lib180parent.component';

describe('Lib180parentComponent', () => {
  let component: Lib180parentComponent;
  let fixture: ComponentFixture<Lib180parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib180parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib180parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

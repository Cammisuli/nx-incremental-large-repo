import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib278parentComponent } from './lib278parent.component';

describe('Lib278parentComponent', () => {
  let component: Lib278parentComponent;
  let fixture: ComponentFixture<Lib278parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib278parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib278parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

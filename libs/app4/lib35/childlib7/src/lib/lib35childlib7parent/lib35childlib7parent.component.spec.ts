import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib7parentComponent } from './lib35childlib7parent.component';

describe('Lib35childlib7parentComponent', () => {
  let component: Lib35childlib7parentComponent;
  let fixture: ComponentFixture<Lib35childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

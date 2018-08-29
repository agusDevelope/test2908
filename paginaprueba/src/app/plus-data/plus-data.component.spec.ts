import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusDataComponent } from './plus-data.component';

describe('PlusDataComponent', () => {
  let component: PlusDataComponent;
  let fixture: ComponentFixture<PlusDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

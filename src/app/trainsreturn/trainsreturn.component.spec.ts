import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsreturnComponent } from './trainsreturn.component';

describe('TrainsreturnComponent', () => {
  let component: TrainsreturnComponent;
  let fixture: ComponentFixture<TrainsreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaSatsComponent } from './corona-sats.component';

describe('CoronaSatsComponent', () => {
  let component: CoronaSatsComponent;
  let fixture: ComponentFixture<CoronaSatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaSatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaSatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

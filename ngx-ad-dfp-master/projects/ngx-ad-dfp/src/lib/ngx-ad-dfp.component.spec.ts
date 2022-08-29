import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdDfpComponent } from './ngx-ad-dfp.component';

describe('NgxAdDfpComponent', () => {
  let component: NgxAdDfpComponent;
  let fixture: ComponentFixture<NgxAdDfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdDfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdDfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

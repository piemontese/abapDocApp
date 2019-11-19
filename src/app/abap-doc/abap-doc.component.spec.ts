import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbapDocComponent } from './abap-doc.component';

describe('AbapDocComponent', () => {
  let component: AbapDocComponent;
  let fixture: ComponentFixture<AbapDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbapDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbapDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalValueComponent } from './modal-value.component';

describe('ModalValueComponent', () => {
  let component: ModalValueComponent;
  let fixture: ComponentFixture<ModalValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatmentComponent } from './create-statment.component';

describe('CreateStatmentComponent', () => {
  let component: CreateStatmentComponent;
  let fixture: ComponentFixture<CreateStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

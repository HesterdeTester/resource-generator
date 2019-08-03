import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningFormComponent } from './mining-form.component';

describe('MiningFormComponent', () => {
  let component: MiningFormComponent;
  let fixture: ComponentFixture<MiningFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

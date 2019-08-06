import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MiningChartComponent } from './mining-chart.component';

describe('MiningChartComponent', () => {
  let component: MiningChartComponent;
  let fixture: ComponentFixture<MiningChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MiningCalcService } from '../services/mining-calc.service';
import Geodes from '../../assets/data/geodes.json';

@Component({
  selector: 'app-mining-form',
  templateUrl: './mining-form.component.html',
  styleUrls: ['./mining-form.component.scss']
})
export class MiningFormComponent implements OnInit {
  miningForm: FormGroup;
  oreArray: any[];
  geodes: any = Geodes;
  submittedGeode: any;

  constructor(private miningCalcService: MiningCalcService) { }

  ngOnInit() {
    this.miningForm = new FormGroup({
      geode: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.submittedGeode = null;
    setTimeout(() => {
      this.submittedGeode = this.geodes.geodeList.find(item => item.id === this.miningForm.controls.geode.value);
      this.oreArray = this.miningCalcService.getResult(
        this.miningForm.controls.level.value, this.miningForm.controls.geode.value);
    }, 100);
  }
}

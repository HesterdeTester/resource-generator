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
  message: string;
  geodes: any = Geodes;

  constructor(private miningCalcService: MiningCalcService) { }

  ngOnInit() {
    console.log(this.geodes);
    this.miningForm = new FormGroup({
      geode: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.miningForm.value);
    this.message = JSON.stringify(this.miningCalcService.getResult(
      this.miningForm.controls.level.value, this.miningForm.controls.geode.value)); // moet andere waardes (level,geode)
  }

}

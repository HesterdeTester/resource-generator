import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MiningCalcService } from '../services/mining-calc.service';

@Component({
  selector: 'app-mining-form',
  templateUrl: './mining-form.component.html',
  styleUrls: ['./mining-form.component.scss']
})
export class MiningFormComponent implements OnInit {
  miningForm: FormGroup;
  message: string;

  constructor(private miningCalcService: MiningCalcService) { }

  ngOnInit() {
    this.miningForm = new FormGroup({
      planet: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.miningForm.value);
    this.message = JSON.stringify(this.miningCalcService.getResult());
  }

}

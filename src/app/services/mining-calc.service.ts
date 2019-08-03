import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiningCalcService {
  mockResult = {
    grondstof1: 1,
    grondstof2: 0,
    grondstof3: 3
  };

  constructor() { }

  getResult(): any {
    return this.mockResult;
  }
}

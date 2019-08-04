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

  getResult(geode, level): any {
    const chances = this.getChances(geode);
    return this.calculator(level, chances);
  }

  getChances(geode) {
    const chanceRest = 21;
    return chanceRest;
    // krijg de unubtaniumChance,	suriliumChance,	daliumChance,	blarniumChance, of endrange, in een json
  }

  calculator(level = 10, unubtaniumChance = 21, suriliumChance = 47, daliumChance = 9, blarniumChance = 21): any {  // nu nog hardcoded
    const loops = level + this.getRandomInt((level / 2), level);
    const unubtaniumEndRange = unubtaniumChance - 1; // chance.unubtanium (want JSON), zou ook endRange terug kunnen krijgen
    const suriliumEndRange = unubtaniumChance + suriliumChance - 1;
    const daliumEndRange = unubtaniumChance + suriliumChance + daliumChance - 1;
    const blarniumEndRange = unubtaniumChance + suriliumChance + daliumChance + blarniumChance - 1;

    const grondstoffen = this.getGrondstof(loops, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange);
    return grondstoffen;
  }
  getGrondstof(loops, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange) {
    const result = [];
    for (let i = 0; i < loops; i++) {
      const calcChance: number = this.getRandomInt(0, 99); // 99 nodig, anders krijgt empty 3 procent kans ipv 2
      if (this.inRange(calcChance, 0, unubtaniumEndRange)) {
        result.push('Unubtanium');
      }
      if (this.inRange(calcChance, (unubtaniumEndRange + 1), suriliumEndRange)) {
        result.push('Surilium');
      }
      if (this.inRange(calcChance, (suriliumEndRange + 1), daliumEndRange)) {
        result.push('Dalium');
      }
      if (this.inRange(calcChance, (daliumEndRange + 1), blarniumEndRange)) {
        result.push('Blarnium');
      } else {
        result.push('Empty');   // misschien raar als je level 10 bent en je 10 grondstoffen verwacht,
        // dan krijg je er 7 waarvan 3 'empty', over nadenken
      }
      return result;
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
  }
}

import { Injectable } from '@angular/core';
import Geodes from '../../assets/data/geodes.json';

@Injectable({
  providedIn: 'root'
})
export class MiningCalcService {
  geodes: any = Geodes;

  mockResult = {
    grondstof1: 1,
    grondstof2: 0,
    grondstof3: 3
  };

  constructor() { }

  getResult(level: number, geode): any {
    const chancesJson = this.getChances(geode);
    return this.calculator(level, chancesJson.chances);
  }

  getChances(geode) {
    return this.geodes.geodeList.find(item => item.id === geode);
    // const chanceRest = 21; oud,
    // return chanceRest;
    // krijg de unubtaniumChance,	suriliumChance,	daliumChance,	blarniumChance, of endrange, in een json
  }
  // nu nog hardcoded:
  calculator(level: number, chance): any {
    const loops: number = Math.round(this.getRandomInt((level / 2), level));
    const unubtaniumEndRange = chance.unubtanium - 1; // chance.unubtanium (want JSON), zou ook endRange terug kunnen krijgen
    const suriliumEndRange = chance.unubtanium + chance.surilium - 1;
    const daliumEndRange = chance.unubtanium + chance.surilium + chance.dalium - 1;
    const blarniumEndRange = chance.unubtanium + chance.surilium + chance.dalium + chance.blarnium - 1;
    const grondstoffen = this.getGrondstof(loops, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange);
    return grondstoffen;
  }
  getGrondstof(loops: number, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange) {
    const result = [];
    for (let i = 0; i < loops; i++) {
      const calcChance: number = this.getRandomInt(0, 99); // 99 nodig, anders krijgt empty 3 procent kans ipv 2
      if (this.inRange(calcChance, 0, unubtaniumEndRange)) {
        result.push('Unubtanium');
        continue;
      }
      if (this.inRange(calcChance, (unubtaniumEndRange + 1), suriliumEndRange)) {
        result.push('Surilium');
        continue;
      }
      if (this.inRange(calcChance, (suriliumEndRange + 1), daliumEndRange)) {
        result.push('Dalium');
        continue;
      }
      if (this.inRange(calcChance, (daliumEndRange + 1), blarniumEndRange)) {
        result.push('Blarnium');
        continue;
      }
      if (this.inRange(calcChance, (blarniumEndRange + 1), 99)) {
        result.push('Empty');
        continue;
      }
  }
    return result;
  }

getRandomInt(min, max): number {
  return Math.random() * (max - min) + min;
}
inRange(x, min, max) {
  return ((x - min) * (x - max) <= 0);
}
}

import { Injectable } from '@angular/core';
import Geodes from '../../assets/data/geodes.json';

@Injectable({
  providedIn: 'root'
})
export class MiningCalcService {
  geodes: any = Geodes;

  constructor() { }

  getResult(level: number, geode): any {
    const chancesJson = this.getChances(geode);
    return this.calculator(level, chancesJson.chances);
  }

  getChances(geode) {
    return this.geodes.geodeList.find(item => item.id === geode);
  }

  calculator(level: number, chance): any {
    const loops: number = Math.ceil(this.getRandomInt((level / 2), level));
    const unubtaniumEndRange = chance.unubtanium - 1; // chance.unubtanium (want JSON), zou ook endRange terug kunnen krijgen
    const suriliumEndRange = chance.unubtanium + chance.surilium - 1;
    const daliumEndRange = chance.unubtanium + chance.surilium + chance.dalium - 1;
    const blarniumEndRange = chance.unubtanium + chance.surilium + chance.dalium + chance.blarnium - 1;
    const grondstoffen = this.getGrondstof(loops, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange);
    return grondstoffen;
  }
  getGrondstof(loops: number, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange) {
    const result = [];
    let unubtaniumCount: number = 0;
    let suriliumCount: number = 0;
    let daliumCount: number = 0;
    let blarniumCount: number = 0;
    let emptyCount: number = 0;
    let totalCount: number = 0;
    for (let i = 0; i < loops; i++) {
      totalCount++;
      const calcChance: number = this.getRandomInt(0, 99); // 99 nodig, anders krijgt empty 3 procent kans ipv 2
      if (this.inRange(calcChance, 0, unubtaniumEndRange)) {
        result.push('Unubtanium');
        unubtaniumCount++;
        continue;
      }
      if (this.inRange(calcChance, (unubtaniumEndRange + 1), suriliumEndRange)) {
        result.push('Surilium');
        suriliumCount++;
        continue;
      }
      if (this.inRange(calcChance, (suriliumEndRange + 1), daliumEndRange)) {
        result.push('Dalium');
        daliumCount++;
        continue;
      }
      if (this.inRange(calcChance, (daliumEndRange + 1), blarniumEndRange)) {
        result.push('Blarnium');
        blarniumCount++;
        continue;
      }
      if (this.inRange(calcChance, (blarniumEndRange + 1), 99)) {
        result.push('Empty');
        emptyCount++;
        continue;
      }
    }
    const textJson = '[' +
      '{ name: "Unubtanium" , amount: ' + unubtaniumCount + ' },' +
      '{ name: "Surilium:" , amount: ' + suriliumCount + ' },' +
      '{ name: "Dalium" , amount: ' + daliumCount + ' },' +
      '{ name: "Blarnium" , amount: ' + blarniumCount + ' },' +
      '{ name: "Empty" , amount: ' + emptyCount + ' }+ ' +
      '{ name: "Total" , amount: ' + totalCount + ' }]'
    //console.log('textJSON' + textJson);
    return textJson;
  }


  getRandomInt(min, max): number {
    return Math.random() * (max - min) + min;
  }
  inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
  }
}

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
  getChances(planet) {
    // krijg de unubtaniumChance,	suriliumChance,	daliumChance,	blarniumChance
  }

  calculator(level = 10, unubtaniumChance = 21, suriliumChance = 47, daliumChance = 9, blarniumChance = 21): any {  // nu nog hardcoded
    const loops = level + getRandomInt((level / 2), level);
    const unubtaniumEndRange = unubtaniumChance - 1;
    const suriliumEndRange = unubtaniumChance + suriliumChance - 1;
    const daliumEndRange = unubtaniumChance + suriliumChance + daliumChance - 1;
    const blarniumEndRange = unubtaniumChance + suriliumChance + daliumChance + blarniumChance - 1;

    const grondstoffen = getGrondstof(level, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange);

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * max) + min;
    }

    function inRange(x, min, max) {
      return ((x - min) * (x - max) <= 0);
    }

    function getGrondstof(loops, unubtaniumEndRange, suriliumEndRange, daliumEndRange, blarniumEndRange) {
      const result = [];
      for (let i = 0; i < loops; i++) {
        const calcChance: number = getRandomInt(0, 99); // 99 nodig, anders krijgt empty 3 procent kans ipv 2
        if (inRange(calcChance, 0, unubtaniumEndRange)) {
          result.push('Unubtanium');
        }
        if (inRange(calcChance, (unubtaniumEndRange + 1) , suriliumEndRange)) {
          result.push('Surilium');
        }
        if (inRange(calcChance, (suriliumEndRange + 1), daliumEndRange)) {
          result.push('Dalium');
        }
        if (inRange(calcChance, (daliumEndRange + 1), blarniumEndRange)) {
          result.push('Blarnium');
        } else {
          result.push('Empty');   // misschien raar als je level 10 bent en je 10 grondstoffen verwacht,
                                  // dan krijg je er 7 waarvan 3 'empty', over nadenken
        }
        return result;
      }

      return grondstoffen;
    }
  }

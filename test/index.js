'use strict';



import { expect } from 'chai';
import luhn from './src';

describe('luhn', () => {
  it('should exists', () => {
    expect(luhn).to.exist;
  });

  it('should return false for wrong inputs', () => {
    expect(luhn()).to.be.false;
    expect(luhn('')).to.be.false;
    expect(luhn('abc')).to.be.false;
    expect(luhn('1.0')).to.be.false;
    expect(luhn(1)).to.be.false;
    expect(luhn([])).to.be.false;
    expect(luhn({})).to.be.false;
  });

  describe('algorithm', () => {
    let validOnes = [
        '4149685344157815',
        '4984421209470251',
        '49927398716',
        '1234567812345670'
      ],
      invalidOnes = [
        '49927398717',
        '1234567812345678'
      ];

    it('should recognize valid numbers', () => {
      for (var i of validOnes) {
        expect(luhn(i)).to.be.true;
      }
    });

    it('should recognize invalid numbers', () => {
      for (var i of invalidOnes) {
        expect(luhn(i)).to.be.false;
      }
    });
  });

});

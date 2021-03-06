import Octal from './octal';

describe('octal', () => {

  it('1 is decimal 1', () => {
    expect(new Octal('1').toDecimal()).toEqual(1);
  });

  xit('10 is decimal 8', () => {
    expect(new Octal('10').toDecimal()).toEqual(8);
  });

  xit('17 is decimal 15', () => {
    expect(new Octal('17').toDecimal()).toEqual(15);
  });

  xit('11 is decimal 9', () => {
    expect(new Octal('11').toDecimal()).toEqual(9);
  });

  xit('130 is decimal 88', () => {
    expect(new Octal('130').toDecimal()).toEqual(88);
  });

  xit('2047 is decimal 1063', () => {
    expect(new Octal('2047').toDecimal()).toEqual(1063);
  });

  xit('7777 is decimal 4095', () => {
    expect(new Octal('7777').toDecimal()).toEqual(4095);
  });

  xit('1234567 is decimal 342391', () => {
    expect(new Octal('1234567').toDecimal()).toEqual(342391);
  });

  xit('invalid is decimal 0', () => {
    expect(new Octal('carrot').toDecimal()).toEqual(0);
  });

  xit('considers the digit 8 as invalid', () => {
    expect(new Octal('12345678').toDecimal()).toEqual(0);
  });

});

const add = require('../index');

it ('Should start number is smaller than end number', () => {
    const StartNum = 2;
    const EndNum = 4;
    const result = add.isStartNumSmallerThanTheEndNum(StartNum,EndNum);
    expect(result).toBe(true);
});

it ('Should start number is greater than end number', () => {
    const StartNum = 4;
    const EndNum = 2;
    const result = add.isStartNumSmallerThanTheEndNum(StartNum,EndNum);
    expect(result).toBe(false);
});

it ('Should not end number is smaller than start number', () => {
    const StartNum = 4;
    const EndNum = 2;
    const result = add.isStartNumSmallerThanTheEndNum(StartNum,EndNum);
    expect(result).toBe(false);
});

it ('Should start number and end number can be any number in a range of 1 to 1000 (inclusive)', () => {
    const StartNum = 2;
    const EndNum = 4;
    const result = add.areStartNumAndEndNumAreWithinRange(StartNum,EndNum);
    expect(result).toBe(true);
});

it ('Should not start number and end number can be any number in a range of 1 to 1000 (inclusive)', () => {
    const StartNum = -2;
    const EndNum = 4;
    const result = add.areStartNumAndEndNumAreWithinRange(StartNum,EndNum);
    expect(result).toBe(false);
});

it ('Should not input null', () => {
    const StartNum = null;
    const EndNum = 4;
    const result = add.areStartNumAndEndNumAreWithinRange(StartNum,EndNum);
    expect(result).toBe(false);
});

it ('Multiply range', () => {
    const StartNum = 2;
    const EndNum = 4;
    const result = add.multiplyRange(StartNum,EndNum);
    console.log(result);
    const expectedText = 
        '2*2=4\n'+
        '2*3=6 3*3=9\n'+
        '2*4=8 3*4=12 4*4=16\n';
    expect(result).toBe(expectedText);
});
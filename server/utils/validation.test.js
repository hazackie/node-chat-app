const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var res = isRealString(12323);
		expect(res).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var res = isRealString('   ');
		expect(res).toBe(false);
	});

	it('should allow string', () => {
		var res = isRealString('    haz');
		expect(res).toBe(true);
	});
});
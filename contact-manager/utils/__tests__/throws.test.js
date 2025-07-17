const {
  throwIfLessThan,
  throwIfNaN,
  throwIfNotEqual,
} = require("../throws.js");

describe("test suite for throw functions", () => {
  describe("throw if less than tests", () => {
    it("should throw when a and b are both numbers, and a < b", () => {
      expect(() => throwIfLessThan(2, 3)).toThrow();
    });

    it("should return undefined if a >= b", () => {
      expect(() => throwIfLessThan(3, 2)).not.toThrow();
    });

    it("should not throw if a, b undefined", () => {
      expect(() => throwIfLessThan()).not.toThrow();
    });
  });

  describe("throw if NaN", () => {
    it("should not throw when a is not a number", () => {
      expect(() => throwIfNaN("steve")).not.toThrow();
    });

    it("should throw if nan a is a number", () => {
      expect(() => throwIfNaN(NaN)).toThrow();
    });

    describe("throw if not equal tests", () => {
      it("should throw when a and b are both numbers, and a !== b", () => {
        expect(() => throwIfNotEqual(2, 3)).toThrow();
      });

      it("should return undefined if a === b", () => {
        expect(() => throwIfNotEqual(3, 3)).not.toThrow();
      });

      it("should not throw if a, b undefined", () => {
        expect(() => throwIfNotEqual()).not.toThrow();
      });
    });
  });
});

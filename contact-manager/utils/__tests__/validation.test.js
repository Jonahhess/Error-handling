const { parseAdd, parseDelete, parseSearch } = require("../validation.js");

describe("test suite for validation functions", () => {
  describe("parse add tests", () => {
    it("should throw on all inputs below", () => {
      const invalidJsonInputs = [
        undefined,
        BigInt(9007199254740991),
        '"hello"',
        "123",
        "",
        "{foo:bar}",
        '{"a":1}',
        "{]",
        "[{]",
        '{"key":value}',
        "[1, 2, 3",
        "not a json",
        "true",
        "null",
        true,
        null,
        ["name", "email", "phone"],
        [1, 2, 3],
        { name: "jon", email: "jon@jon.com", phone: "123-456-7890" },
        ["john", "john", "123-456-7890"],
        ["####", "j@m.co", "1111111111"],
      ];
      invalidJsonInputs.forEach((element) => {
        expect(() => parseAdd(element)).toThrow();
      });
    });

    it("should parse these inputs correctly", () => {
      const validInputs = [
        ["john", "john@doe.com", "123-456-7890"],
        ["john2", "john@doe.com", "123-456-7899"],
      ];
      validInputs.forEach((element) => {
        expect(() => parseAdd(element)).not.toThrow();
      });
    });
  });

  describe("parse delete tests", () => {
    it("should throw on all inputs below", () => {
      const invalidJsonInputs = [
        undefined,
        BigInt(9007199254740991),
        '"hello"',
        "123",
        "",
        "{foo:bar}",
        '{"a":1}',
        "{]",
        "[{]",
        '{"key":value}',
        "[1, 2, 3",
        "not a json",
        "true",
        "null",
        true,
        null,
        ["name", "email", "phone"],
        [1, 2, 3],
        { name: "jon", email: "jon@jon.com", phone: "123-456-7890" },
        ["john", "john", "123-456-7890"],
        ["####", "j@m.co", "1111111111"],
      ];
      invalidJsonInputs.forEach((element) => {
        expect(() => parseDelete(element)).toThrow();
      });
    });

    it("should parse these inputs correctly", () => {
      const validInputs = [
        ["john@j.com", "john@doe.com", "123-456-7890"],
        ["john2@h.com", "john@doe.com", "123-456-7899"],
      ];
      validInputs.forEach((element) => {
        expect(() => parseDelete(element)).not.toThrow();
      });
    });
  });
  describe("parse search tests", () => {
    it("should throw on all inputs below", () => {
      const invalidJsonInputs = [
        undefined,
        BigInt(9007199254740991),
        '"hello"',
        "123",
        "",
        "{foo:bar}",
        '{"a":1}',
        "{]",
        "[{]",
        '{"key":value}',
        "[1, 2, 3",
        "not a json",
        "true",
        "null",
        true,
        null,
        //["name", "email", "phone"],
        //[1, 2, 3],
        // { name: "jon", email: "jon@jon.com", phone: "123-456-7890" },
        //["john", "john", "123-456-7890"],
        //["####", "j@m.co", "1111111111"],
      ];
      invalidJsonInputs.forEach((element) => {
        expect(() => parseSearch(element)).toThrow();
      });
    });

    it("should parse these inputs correctly", () => {
      const validInputs = [
        ["john", "john@doe.com", "123-456-7890"],
        ["john2", "john@doe.com", "123-456-7899"],
      ];
      validInputs.forEach((element) => {
        expect(() => parseSearch(element)).not.toThrow();
      });
    });
  });
});

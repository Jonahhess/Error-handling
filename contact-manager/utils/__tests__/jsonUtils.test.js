const { JSONToObjectArray, ObjectArrayToJSON } = require('../jsonUtils.js');

describe("check the functions that modify jsons to arrays and array to jsons", () => {

    // JSONToObjectArray
    describe("check JSONToObjectArray that parse received string json", () => {

        it("should parse valid JSON arrays which contain only objects", () => {
            expect(JSONToObjectArray('[]')).toEqual([]);
            expect(JSONToObjectArray('[{"a":1}]')).toEqual([{ a: 1 }]);
            expect(JSONToObjectArray('[{"a":1},{"bar":1},{}]')).toEqual([{ "a": 1 }, { "bar": 1 }, {}]);
        });

        it("should throw an error for invalid JSON", () => {
            const invalidJsonInputs = [
                undefined,
                BigInt(9007199254740991),
                '"hello"',
                '123',
                '',
                '{foo:bar}',
                '{"a":1}',
                '{]',
                '[{]',
                '{"key":value}',
                '[1, 2, 3',
                'not a json',
                'true',
                'null',
                true,
                null,
            ];
            invalidJsonInputs.forEach((element) => {
                expect(() => JSONToObjectArray(element)).toThrow();
            });
        });
    });

    // ObjectArrayToJSON
    describe("check ObjectArrayToJSON that receives and array and stringify it", () => {

        it("should stringify valid arrays and objects", () => {
            expect(ObjectArrayToJSON([])).toBe('[]');
            expect(ObjectArrayToJSON([{ a: 1 }])).toBe('[{"a":1}]');
            expect(ObjectArrayToJSON([{ "a": 1 }, { "bar": 1 }, {}])).toBe('[{"a":1},{"bar":1},{}]');
        });

        it("should throw an error for invalid JSON", () => {
            const invalidJsonInputs = [
                undefined,
                BigInt(9007199254740991),
                [1, 2, 3],
                { a: 1 },
                "hello",
                123,
                true,
                null,
            ];
            invalidJsonInputs.forEach((element) => {
                expect(() => JSONToObjectArray(element)).toThrow();
            });
        });
    });
});

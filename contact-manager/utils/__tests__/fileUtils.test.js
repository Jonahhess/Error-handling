
jest.mock("fs");

const filesUtils = require('../fileUtils.js');
const fs = require("fs");

describe("test readFromFile and overwriteFile", () => {

     beforeEach(() => {
        jest.clearAllMocks();
    });

    // filesUtils.readFromFile
    describe("function should get the data from db and return it", () => {

        it("should return string json", () => {
            fs.readFileSync.mockReturnValue('[{"test":123}]');
            expect(filesUtils.readFromFile()).toBe('[{"test":123}]');
            expect(typeof filesUtils.readFromFile()).toBe("string");
        });

        it("should call fs.readFileSync with correct path and encoding", () => {
            fs.readFileSync.mockReturnValue('[]');
            filesUtils.readFromFile();
            expect(fs.readFileSync).toHaveBeenCalledWith("../contacts.json", "utf8");
        });
    })

    // filesUtils.overWriteFile
    describe("function should get param of json with data and write it to the db", () => {

         it("should call fs.writeFileSync with correct path and data", () => {
            filesUtils.overwriteFile('{"foo":"bar"}');
            expect(fs.writeFileSync).toHaveBeenCalledWith("../contacts.json", '{"foo":"bar"}');
        });

        it("should throw if fs.writeFileSync throws", () => {
            fs.writeFileSync.mockImplementation(() => { throw new Error("Write error"); });
            expect(() => filesUtils.overwriteFile('bad')).toThrow("Write error");
        });
    });
});
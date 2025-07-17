
jest.mock("fs"); //mock fs

const filesUtils = require('../fileUtils.js');
const fs = require("fs");

describe("test readFromFile and overwriteFile", () => {

     beforeEach(() => {
        jest.clearAllMocks();
    });

    // filesUtils.readFromFile
    describe("function should get the data from db and return it", () => {

        it("should return string json", () => {
            fs.readFileSync.mockReturnValue('[{"test":123}]'); //creat mock for fs.readFileSync
            expect(filesUtils.readFromFile()).toBe('[{"test":123}]');
            expect(typeof filesUtils.readFromFile()).toBe("string");
        });

        it("should call fs.readFileSync with correct path and encoding", () => {
            fs.readFileSync.mockReturnValue('[]'); //mock return value
            filesUtils.readFromFile(); //call the function
            expect(fs.readFileSync).toHaveBeenCalledWith("../contacts.json", "utf8"); //check if fs.readFileSync was called with correct arguments
        });
    })

    // filesUtils.overWriteFile
    describe("function should get param of json with data and write it to the db", () => {

         it("should call fs.writeFileSync with correct path and data", () => {
            filesUtils.overwriteFile('{"foo":"bar"}'); //create mock for fs.writeFileSync
            expect(fs.writeFileSync).toHaveBeenCalledWith("../contacts.json", '{"foo":"bar"}'); //check if fs.writeFileSync was called with correct arguments
        });

        it("should throw if fs.writeFileSync throws", () => {
            fs.writeFileSync.mockImplementation(() => { throw new Error("Write error"); }); //mock implementation to throw an error
            expect(() => filesUtils.overwriteFile('bad')).toThrow("Write error"); //expect the function to throw an error
        });
    });
});
import jsonUtils from '../jsonUtils.js';

test("json to array",()=>{
    const json = "[]";
    expect(jsonUtils.JSONToObjectArray(json).toBe([]));
})
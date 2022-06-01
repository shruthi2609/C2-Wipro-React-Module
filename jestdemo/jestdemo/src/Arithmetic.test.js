import { add,sub } from "./Arithmetic";
test("check addition",()=>{
    expect(add(10,5)).toBe(15)
})

test("check sub",()=>{
    expect(sub(10,5)).not.toBe(15)
})
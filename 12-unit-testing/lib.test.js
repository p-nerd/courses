import { abs, greet } from "./lib.js";

// Testing Numbers
describe("abs():", () => {
    it("Should return positive number if input is positive", () => {
        expect(abs(1)).toEqual(1);
    });

    it("Should return positive number if input is negative", () => {
        expect(abs(-1)).toEqual(1);
    });

    it("Should return 0 number if input is 0", () => {
        expect(abs(0)).toEqual(0);
    });
});

// Testing Strings
describe("greet():", () => {
    it("Should return greeting message", () => {
        // expect(greet("Shihab")).toBe("Welcome Shihab");
        expect(greet("Shihab")).toMatch(/Shihab/);
        expect(greet("Shihab")).toContain("Shihab");
    });
});
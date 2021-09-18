const codeBreaker = require("./code-breaker");

const secret = "1234";

describe("Code Breaker", () => {
    test("All bad", () => {
        var result = codeBreaker.guess(secret, "6789");
        expect(result).toBe("");
    });
    test("One good bad position", () => {
        var result = codeBreaker.guess(secret, "9476");
        expect(result).toBe("-");
    });
    test("Two good bad positions", () => {
        var result = codeBreaker.guess(secret, "9416");
        expect(result).toBe("--");
    });
    test("Three good bad positions", () => {
        var result = codeBreaker.guess(secret, "2416");
        expect(result).toBe("---");
    });
    test("Four good bad positions", () => {
        var result = codeBreaker.guess(secret, "2413");
        expect(result).toBe("----");
    });
    test("One good and good position", () => {
        var result = codeBreaker.guess(secret, "1987");
        expect(result).toBe("X");
    });
    test("Two good and good positions", () => {
        var result = codeBreaker.guess(secret, "1287");
        expect(result).toBe("XX");
    });
    test("Three good and good positions", () => {
        var result = codeBreaker.guess(secret, "1236");
        expect(result).toBe("XXX");
    });
    test("Four good and good positions", () => {
        var result = codeBreaker.guess(secret, "1234");
        expect(result).toBe("XXXX");
    });
    test("Two good and one bad position", () => {
        var result = codeBreaker.guess(secret, "1456");
        expect(result).toBe("X-");
    });
    test("Three good and two bad position", () => {
        var result = codeBreaker.guess(secret, "1426");
        expect(result).toBe("X--");
    });
});

const CodeBreaker = require("./code-breaker");

const secret = "1234";

describe("Code Breaker", () => {
    codeBreaker=new CodeBreaker()
    
    test("All bad", () => {
        var result = codeBreaker.guess("6789",secret);
        expect(result).toBe("");
    });
    test("One good bad position", () => {
        var result = codeBreaker.guess("9476",secret);
        expect(result).toBe("-");
    });
    test("Two good bad positions", () => {
        var result = codeBreaker.guess("9416",secret);
        expect(result).toBe("--");
    });
    test("Three good bad positions", () => {
        var result = codeBreaker.guess("2416",secret);
        expect(result).toBe("---");
    });
    test("Four good bad positions", () => {
        var result = codeBreaker.guess("2413",secret);
        expect(result).toBe("----");
    });
    test("One good and good position", () => {
        var result = codeBreaker.guess("1987",secret);
        expect(result).toBe("X");
    });
    test("Two good and good positions", () => {
        var result = codeBreaker.guess("1287",secret);
        expect(result).toBe("XX");
    });
    test("Three good and good positions", () => {
        var result = codeBreaker.guess("1236",secret);
        expect(result).toBe("XXX");
    });
    test("Four good and good positions", () => {
        var result = codeBreaker.guess("1234",secret);
        expect(result).toBe("XXXX");
    });
    test("Two good and one bad position", () => {
        var result = codeBreaker.guess("1456",secret);
        expect(result).toBe("X-");
    });
    test("Three good and two bad position", () => {
        var result = codeBreaker.guess("1426",secret);
        expect(result).toBe("X--");
    });
});

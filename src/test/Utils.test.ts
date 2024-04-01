import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.skip("Utils test suite", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    afterEach(() => {
      // clear mocks
    });

    it.only("Should return correct UpperCase", () => {
      const actual = sut.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });

    it.only("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      expect(expectError).toThrow();
      expect(expectError).toThrow("Invalid argument");
    });

    it("Should throw error on invalid argument - arrow function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      expect(() => {
        const actual = sut.toUpperCase("");
      }).toThrow("Invalid argument");
    });

    it("Should throw error on invalid argument - try catch block", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      try {
        sut.toUpperCase("");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
      }
    });

    it("should return uppercase of a valid string", () => {
      // arrange
      const sut = toUpperCase;
      const expected = "ABC";

      // act
      const actual = toUpperCase("abc");

      // assert
      expect(actual).toBe(expected);
    });

    describe("ToUpperCase examples", () => {
      it.each([
        { input: "abc", expected: "ABC" },
        { input: "My-String", expected: "MY-STRING" },
        { input: "def", expected: "DEF" },
      ])("$input toUpperCase should be $expected", ({ input, expected }) => {
        const actual = toUpperCase(input);
        expect(actual).toBe(expected);
      });
    });

    describe("getStringInfo for arg My-String should", () => {
      test("return right length", () => {
        const actual = getStringInfo("My-String");
        expect(actual.characters).toHaveLength(9);
      });
      test("return right lower case", () => {
        const actual = getStringInfo("My-String");
        expect(actual.lowerCase).toBe("my-string");
      });
      test("return right lower case", () => {
        const actual = getStringInfo("My-String");
        expect(actual.upperCase).toBe("MY-STRING");
      });
      test("return right characters", () => {
        const actual = getStringInfo("My-string");
        expect(actual.characters).toEqual("My-string".split(""));
        expect(actual.characters).toContain<String>("M");
        expect(actual.characters).toEqual(
          expect.arrayContaining(["s", "t", "r", "i", "n", "g", "M", "y", "-"])
        );
      });
    });

    it("should return info for valid string", () => {
      const actual = getStringInfo("My-string");

      expect(actual.lowerCase).toBe("my-string");
      expect(actual.extraInfo).toEqual({});

      expect(actual.characters).toHaveLength("My-string".length);
      expect(actual.characters).toEqual("My-string".split(""));
      expect(actual.characters).toContain<String>("M");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["s", "t", "r", "i", "n", "g", "M", "y", "-"])
      );

      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});

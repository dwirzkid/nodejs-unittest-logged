beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("Inner", () => {
  beforeAll(() => console.info("Before All Inner"));
  afterAll(() => console.info("After All Inner"));
  beforeEach(() => console.info("Before Each Outer"));
  afterEach(() => console.info("After Each Outer"));
  test("Test Inner", () => console.info("Test Inner"));
});

describe("Inner 2", () => {
  beforeEach(() => console.info("Before Each Outer"));
  afterEach(() => console.info("After Each Outer"));
  test("Test Inner", () => console.info("Test Inner"));
});

beforeEach(() => console.info("Before Each 1"));
afterEach(() => console.info("After Each 1"));
describe("inner scope", () => {
  beforeEach(() => console.info("Inner Before Each 1"));
  afterEach(() => console.info("Inner After Each 1"));
  describe("inner inner scope", () => {
    beforeEach(() => console.info("Inner Inner Before Each 1"));
    afterEach(() => console.info("Inner Inner After Each 1"));
    test('test 1', () => console.info("Test 1"));
    test('test 2', () => console.info("Test 2"));
  });
});

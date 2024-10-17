import * as assert from "@std/assert";
import { MathFunctions } from "./main.ts";

type PureTestType = keyof typeof assert

class Test<T> {
  name: string;
  testRes: T;
  test: () => void;
  constructor(name: string, testRes: T, func: () => T, type: PureTestType) {
    this.testRes = testRes;
    this.name = name;
    switch (type) {
      case 'assertEquals':
        this.test = () => void assert.assertEquals(func(), testRes);
        break;
      case 'assertGreater':
        this.test = () => void assert.assertGreater(func(), testRes);
        break;
      case 'assertGreaterOrEqual':
        this.test = () => void assert.assertGreaterOrEqual(func(), testRes);
        break;
      case 'assertLess':
        this.test = () => void assert.assertLess(func(), testRes)
        break;
      case 'assertLessOrEqual':
        this.test = () => void assert.assertLessOrEqual(func(), testRes)
        break;
      case 'assertNotEquals':
        this.test = () => void assert.assertNotEquals(func(), testRes)
        break;
      case 'assertStrictEquals':
        this.test = () => void assert.assertStrictEquals(func(), testRes)
        break;
      case 'assertNotStrictEquals':
        this.test = () => void assert.assertNotStrictEquals(func(), testRes)
        break;
      case 'assert':
        this.test = () => void assert.assert(func())
        break;
      case 'assertFalse':
        this.test = () => void assert.assertFalse(func())
        break;
      case 'assertExists':
        this.test = () => void assert.assertExists(func())
        break;
      case 'assertInstanceOf':
        // deno-lint-ignore no-explicit-any
        this.test = () => void assert.assertInstanceOf(func(), testRes as abstract new (...args: any[]) => any)
        break;
      case 'assertNotInstanceOf':
        // deno-lint-ignore no-explicit-any
        this.test = () => void assert.assertNotInstanceOf(func(), testRes as abstract new (...args: any[]) => any)
        break;
      case 'assertObjectMatch':
        // deno-lint-ignore no-explicit-any
        this.test = () => void assert.assertObjectMatch(func() as Record<PropertyKey, any>, testRes as Record<PropertyKey, any>)
        break;
      case 'assertStringIncludes':
        this.test = () => void assert.assertStringIncludes(func() as string, testRes as string)
        break;
      default:
        throw new SyntaxError("Unsupported Test Type")
    }
  }
}

const mathUnitTests = [
  ['add', 5, () => MathFunctions.add(2, 3)],
  ['sub', 1, () => MathFunctions.sub(3, 2)],
  ['multi', 6, () => MathFunctions.multi(3, 2)],
  ['div', 2, () => MathFunctions.div(6, 3)],
  ['exp', 9, () => MathFunctions.exp(3, 2)],
  ['div-with-rem', 3, () => MathFunctions.divWithRem(15, 6)],
].map(
  (val) => new Test(
    `math-${val[0] as string}`,
    val[1] as number,
    val[2] as () => number,
    'assertExists'
  )
) as Test<number>[]

const bulkTests = [
  ['math', () => mathUnitTests.forEach(({ test }) => test())]
]

for (const test of bulkTests) {
  Deno.test({
    name: test[0] as string,
    fn: test[1] as () => void,
  })
}

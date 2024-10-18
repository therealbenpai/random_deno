export default class MathFunctions {
    public static add(a: number, b: number): number {
        return a + b;
    }
    public static sub(a: number, b: number): number {
        return a - b;
    }
    public static multi(a: number, b: number): number {
        return a * b;
    }
    public static div(a: number, b: number): number {
        return a / b;
    }
    public static exp(a: number, b: number): number {
        return a ** b;
    }
    public static divWithRem(a: number, b: number): number {
        return a % b;
    }
}

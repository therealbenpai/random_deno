export class MathFunctions {
  public static add(a: number, b: number): number {
    return a+b;
  }
  public static sub(a: number, b: number): number {
    return a-b;
  }
  public static multi(a: number, b: number): number {
    return a*b;
  }
  public static div(a: number, b: number): number {
    return a/b;
  }
  public static exp(a: number, b: number): number {
    return a**b;
  }
  public static divWithRem(a: number, b: number): number {
    return a % b;
  }
}

//! Works Like `if __name__ == "__main__"` in Python
if (import.meta.main) {
  console.log("Add 2 + 3 =", MathFunctions.add(2, 3));
}

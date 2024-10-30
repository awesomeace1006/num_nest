// lib.test.js
const { test, expect } = require("@jest/globals");
const { avg, prime, factorial } = require('./lib'); // lib.js에서 함수 불러오기

// avg 함수 테스트
test("avg 함수가 숫자 배열의 평균을 올바르게 계산하는지 확인", () => {
    expect(avg([1, 2, 3, 4, 5])).toBe(3);        // 평균이 3이어야 함
    expect(avg([10, 20, 30])).toBe(20);           // 평균이 20이어야 함
    expect(avg([-10, 10])).toBe(0);               // 평균이 0이어야 함
    expect(avg([0])).toBe(0);                     // 평균이 0이어야 함
});

// prime 함수 테스트
test("prime 함수가 소수를 올바르게 판별하는지 확인", () => {
    expect(prime(2)).toBe(true);  // 2는 소수이므로 true
    expect(prime(7)).toBe(true);  // 7은 소수이므로 true
    expect(prime(4)).toBe(false); // 4는 소수가 아니므로 false
    expect(prime(1)).toBe(false); // 1은 소수가 아니므로 false
});

// factorial 함수 테스트
test("factorial 함수가 팩토리얼 값을 올바르게 계산하는지 확인", () => {
    expect(factorial(5)).toBe(120);         // 5! = 120
    expect(factorial(0)).toBe(1);           // 0! = 1
    expect(factorial(-1)).toBe(-1);         // 음수 입력 시 -1 반환
    expect(factorial(15)).toBe(1307674368000); // 15! = 1307674368000
});

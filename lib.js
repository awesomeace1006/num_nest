function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if (num <= 1) return false; // 1 이하의 숫자는 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // 나누어떨어지면 소수가 아님
    }
    return true; // 소수일 경우 true 반환
}
function factorial(num) {
    if (num < 0) return -1; // 음수는 팩토리얼 계산 불가
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
module.exports = {
    avg,
    prime,
    factorial
}
def solution(n, tops):
    dp = [0] * (n + 1)

    # 초기값 설정
    if tops[0] == 1:
        dp[0] = 1
        dp[1] = 4
    else:
        dp[0] = 1
        dp[1] = 3

    # 점화식 적용
    for idx in range(1, n):
        if tops[idx] == 1:
            dp[idx + 1] = 2 * dp[idx] + dp[idx - 1]
        else:
            dp[idx + 1] = 2 * dp[idx]

    return dp[n] % 10007



# 예시 실행
n = 4
tops = [1, 1, 0, 1]
print(solution(n, tops))  # 결과를 확인하기 위한 출력

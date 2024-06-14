"""
테스트 케이스 8개 이후 시간 초과 ..
"""

"""
처음 시작 : 카드 n/3 + 동전 coin
-
각 라운드 시작 : 카드 두 장 뽑기
    -> 카드 뭉치에 남은 카드가 없을 경우 게임 종료
    -> 동전 하나를 소모하여 카드를 가질 수 있음 (소모 하지 않고 버릴 수 있음)
-
카드 두 장에 적힌 수의 합이 n+1 -> 다음 라운드 진행 가능
    ->없을 경우 게임 종료

=
Q. 최대 라운드의 수를 구하시오.

Sol. DFS + 재귀
    : 라운드 별 카드 두장의 합이 n+1 되는 모든 경우의 수
    : 기저 조건 : total == n // n+1의 경우의 수가 없을 경우 return


"""
from itertools import combinations


max_round = 0
def select(cards, stacks, coins, turn, check, limit_rounds):
    # 현재 남은 카드 리스트, 카드 더미, 남은 동전의 개수, 라운드 수, 두 장의 카드 합
    global max_round

    if turn > limit_rounds:
        return
    max_round = max(max_round, turn)

    # 더 이상 뽑을 카드가 없을 경우
    if not stacks :
        return


    # 현재 카드로 n+1을 만들 수 없는 경우
    if not coins:
        combs = list(combinations(cards, 2))
        check_combs = [two_cards for two_cards in combs if sum(two_cards) == check]
        if not check_combs:
            return


    # 카드 뽑기

    card_A = stacks[0]
    card_B = stacks[1]
    new_stacks = stacks[2:]

    # 뽑은 카드를 소유할 경우
    if coins >= 2:
        temp = cards + [card_A, card_B]
        remove_cards = []

        # 두 장의 합이 N+1인 조합 찾기
        for two_cards in combinations(temp,2):
            if sum(two_cards) == check:
                remove_cards.append(two_cards)

        # 경우의 수가 있을 경우
        if remove_cards:
            for two_cards in remove_cards:

                # update
                now = [num for num in temp if num not in two_cards]
                select(now, new_stacks, coins-2, turn+1, check, limit_rounds )

    if coins>=1:
        picks = [card_A, card_B]
        for pick in picks:
            temp = cards + [pick]
            remove_cards = []

            # 두 장의 합이 N+1인 조합 찾기
            for two_cards in combinations(temp,2):
                if sum(two_cards) == check:
                    remove_cards.append(two_cards)
            # 경우의 수가 있을 경우
            if remove_cards:
                for two_cards in remove_cards:

                    # update
                    now = [num for num in temp if num not in two_cards]
                    select(now, new_stacks, coins-1, turn+1, check, limit_rounds )

    # 카드를 뽑지 않을 경우
    remove_cards = []
    for two_cards in combinations(cards, 2):
        if sum(two_cards) == check:
            remove_cards.append(two_cards)

    # 제거 가능한 카드가 있을 경우
    if remove_cards :
        for two_cards in remove_cards:
            # update
            now = [num for num in cards if num not in two_cards]
            select(now, new_stacks, coins, turn+1, check, limit_rounds )
    else:
        if turn > max_round:
            max_round = turn
            return








def solution(coin, cards):
    global max_round

    N = len(cards) # 카드 총 개수

    S= N//3 # 시작 카드 개수
    start = [cards[idx] for idx in range(S)]

    limit_rounds = (N-S)//2 + 1


    select(start, cards[S:], coin, 1, N+1, limit_rounds )

    return max_round


coin = 4
cards = [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]
print(solution(coin, cards))  # 예상 출력: 5

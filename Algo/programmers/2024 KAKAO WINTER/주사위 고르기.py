from itertools import combinations, product


def count(A, B):
    win_count = 0
    for score_A, count_A in A.items():
        for score_B, count_B in B.items():
            if score_A > score_B:
                win_count += count_A * count_B
    return win_count

def get_all_scores(dice):
    all_scores = {}
    for combinations in product(*dice):
        total = sum(combinations)
        if total in all_scores:
            all_scores[total] +=1
        else:
            all_scores[total] = 1
    return all_scores


def solution(dice):
    N = len(dice)
    max_wins = 0
    answer = []
    
    # 모든 주사위 조합 조건문 작성
    for combs_A in combinations(range(N), N//2):
        # 현재 A 주사위
        dice_A = [dice[i] for i in combs_A]
        
        # 현재 B 주사위
        combs_B = [num for num in range(N) if num not in combs_A]
        dice_B = [dice[i] for i in combs_B]
        
        # A, B 주사위 점수 딕셔너리 작성
        scores_A = get_all_scores(dice_A)
        scores_B = get_all_scores(dice_B)
        
        # 현재 조합으로 승수 구하기
        wins = count(scores_A, scores_B)
        
        if wins > max_wins:
            max_wins = wins
            answer = [num+1 for num in combs_A]
        
    
    return answer
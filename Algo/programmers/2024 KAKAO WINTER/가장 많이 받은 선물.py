"""
1. 이번 달 까지 선물을 주고 받았을 경우 -> 더 많은 선물을 준 사람이 받음
2. 기록이 없거나 주고받은 선물의 수가 같은 경우
    -> 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 하나 받는다.
3. 선물 지수 : 친구들에게 준 선물의 수  - 받은 선물의 수 
    -> 선물 지수도 같다면 주고 받지 않는다. 
"""
from itertools import combinations

def solution(friends, gifts):
    
    # 받은 선물 정보 저장
    total = [ [ 0 for _ in range(len(friends)) ] for _ in range(len(friends))]
    
    # 선물 지수 딕셔너리 초기화
    info = {}
    for member in friends :
        info[member] = [0, 0, 0]
    
    for gift in gifts:
        A, B = gift.split()
        
        # 받은 선물 확인
        total[friends.index(A)][friends.index(B)]+=1
        # 선물 지수 계산을 위한 저장
        info[A][0] +=1
        info[B][1] +=1
    # 선물 지수 계산
    for member in info:
        info[member][2] = info[member][0] - info[member][1]
    
    answer = [ 0 for _ in range(len(friends))]
    
    for i in range(len(friends)):
        A = friends[i]
        for j in range(i, len(friends)):
            B = friends[j] # 상대방
            
            # 선물을 주고 받은 적이 있다면
            if total[i][j] + total[j][i]:
                # 선물을 한 횟수 확인
                if total[i][j] > total[j][i]:
                    answer[i] +=1
                elif total[j][i] > total[i][j]:
                    answer[j] += 1
                else:
                    # 횟수가 같다면 선물 지수 비교
                    if info[A][2] > info[B][2]:
                        answer[i] +=1
                    elif info[B][2] > info[A][2]:
                        answer[j] +=1
            else:
                # 선물 지수 비교
                if info[A][2] > info[B][2]:
                        answer[i] +=1
                elif info[B][2] > info[A][2]:
                    answer[j] +=1
                        
        
    return max(answer)
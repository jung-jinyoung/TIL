from collections import deque

# n+1 가능한지 판단 
def select(cards1, cards2, check):
    
    for card in cards1:
        if check - card in cards2:
            cards1.remove(card)
            cards2.remove(check - card)
            return True
    return False


def solution(coin, cards):
    
    N = len(cards)
    S = N//3
    
    # 라운드 시작 전 소유 카드 리스트
    my_cards = [cards[idx] for idx in range(S)]
    stacks = deque(cards[S:])
    turn = 1
    
    picks = []
    while coin >=0 and stacks:        
        
        # 카드 2장 뽑기
        picks.append(stacks.popleft())
        picks.append(stacks.popleft())
        
        # 코인을 사용하지 않는 방법 확인 
        if select(my_cards, my_cards, len(cards) + 1):
            turn +=1
            continue
            
        # 코인을 1개만 사용
        elif coin >= 1 and select(my_cards, picks, len(cards) + 1):
            coin -= 1
        
        # 코인을 2개 다 사용 == 위의 모든 경우에 걸리지 않을 경우
        elif coin >= 2 and select(picks, picks, len(cards) + 1) :
            coin -= 2
        
        # n+1 경우의 수가 없을 경우
        else : 
            break
        
        turn += 1
        
    return turn
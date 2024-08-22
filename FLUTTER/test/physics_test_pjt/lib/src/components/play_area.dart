import 'dart:async';
import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:flame/sprite.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:flutter/material.dart';

// PlayArea 클래스는 Component를 상속받아 게임의 영역을 정의합니다.
class PlayArea extends Component with HasGameRef {
  late SpriteComponent sprite1; // 정적 스프라이트 컴포넌트를 선언합니다.
  late SpriteAnimationComponent animatedBg; // 애니메이션 스프라이트 컴포넌트를 선언합니다.

  @override
  Future<void> onLoad() async {
    super.onLoad();

    // 정적 스프라이트 로드
    sprite1 = SpriteComponent()
      ..sprite = await gameRef.loadSprite('background/hourglass.png') // 'hourglass.png' 파일을 로드합니다.
      ..size = gameRef.size // 스프라이트의 크기를 게임 화면 크기에 맞춥니다.
      ..priority = 1; // 우선순위를 높게 설정하여 다른 컴포넌트 위에 렌더링됩니다.

    // 애니메이션 배경을 위한 프레임 로드
    List<Sprite> bgFrames = [];
    for (int i = 1; i <= 28; i++) {
      // 각 프레임 이미지를 로드하여 리스트에 추가합니다.
      final frame = await gameRef.loadSprite('bg_frames/frame ($i).jpeg');
      bgFrames.add(frame);
    }

    // 프레임 리스트를 사용하여 SpriteAnimation 생성
    final spriteAnimation = SpriteAnimation.spriteList(
      bgFrames,
      stepTime: 0.16, // 각 프레임의 지속 시간 (초 단위)
      loop: true, // 애니메이션을 반복하도록 설정
    );

    // SpriteAnimationComponent를 생성하여 애니메이션 설정
    animatedBg = SpriteAnimationComponent()
      ..animation = spriteAnimation
      ..size = gameRef.size // 애니메이션 크기를 게임 화면 크기에 맞춤
      ..priority = 0; // 우선순위를 낮게 설정하여 다른 컴포넌트 아래에 렌더링됩니다.

    // 컴포넌트를 부모에 추가
    add(animatedBg); // 애니메이션 배경 추가
    add(sprite1); // 정적 스프라이트 추가
  }
}

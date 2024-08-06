import 'dart:async';

import 'package:flame/collisions.dart';                         // Add this import
import 'package:flame/components.dart';
import 'package:flutter/material.dart';

import '../brick_breaker.dart';

class PlayArea extends RectangleComponent with HasGameReference<BrickBreaker> {
  PlayArea()
      : super(
    paint: Paint()..color = const Color(0xfff2e8cf),
    children: [RectangleHitbox()],                        // Add this parameter
    //RectangleHitbox구성 요소를 자식으로 추가하면 부모 구성 요소의 크기에 맞는 충돌 감지용 히트 박스가 구성
  );

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();
    size = Vector2(game.width, game.height);
  }
}
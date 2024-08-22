import 'package:flame/collisions.dart';
import 'package:flame/game.dart';
import 'package:flame/components.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:flutter/material.dart'; // Path is defined here


import 'components/play_area.dart';
import 'components/glassBall.dart';
import 'components/boundary.dart';

class MyGame extends Forge2DGame with HasCollisionDetection {
  final playArea = PlayArea();
  final Vector2 screenSize;

  MyGame({required this.screenSize})
      : super(
    zoom: 100,
    gravity: Vector2(0, screenSize.y), // 속도 조절 X - 정진영 (24.08.07)
    camera: CameraComponent.withFixedResolution(
      width: screenSize.x,
      height: screenSize.y,
    ),
  );

  
  final ball = GlassBall(
      assetURL: 'marble.png',
      position: Vector2(100, 400),
      radius: 30);

  final ball3 = GlassBall(
      assetURL: 'marble.png',
      position: Vector2(200, 400),
      radius: 90);
  // radius 80까지 모래시계 통과 가능

  final ball4 = GlassBall(
      assetURL: 'marble.png',
      position: Vector2(100, 600),
      radius: 60);

  @override
  Future<void> onLoad() async {
    await super.onLoad();

    final path1 = Path()
      ..moveTo(0, screenSize.y * 0.34)
      ..cubicTo(screenSize.x * 0.13, screenSize.y * 0.48, screenSize.x * 0.68, screenSize.y * 0.575, 0, screenSize.y * 0.735)
      ..close();

    final path2 = Path()
      ..moveTo(screenSize.x, screenSize.y * 0.34)
      ..cubicTo(screenSize.x * 0.87, screenSize.y * 0.47, screenSize.x * 0.32, screenSize.y * 0.575, screenSize.x, screenSize.y * 0.735)
      ..close();



    await add(playArea); // 배경 화면 로드
    await add(Boundary(path1));
    await add(Boundary(path2));

    await add(ball);
    await add(ball3);
    await add(ball4);
    // for (int i = 0; i < 3; i++) {
    //   await add(GlassBall(
    //     assetURL: 'marble.png',
    //     position: Vector2(100 + i * 50 , 600 + i * 100), // Adjust x position incrementally
    //     radius: 50 + i * 10,
    //   ));
    // }
    await add(ScreenHitbox());
  }

  @override
  void update(double dt) {
    super.update(dt);
  }

  @override
  void onRemove() {
    super.onRemove();
  }
}


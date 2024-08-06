import 'dart:async';
import 'dart:math' as math;

import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:flame/events.dart';
// Add this import
import 'package:flutter/material.dart';                         // And this import
import 'package:flutter/services.dart';

import 'components/components.dart';
import 'config.dart';

// HasCollisionDetection에 믹스인을 추가
class BrickBreaker extends FlameGame
    with HasCollisionDetection, KeyboardEvents {                // Modify this line
  // Modify this line
  BrickBreaker()
      : super(
    camera: CameraComponent.withFixedResolution(
      width: gameWidth,
      height: gameHeight,
    ),
  );
  final rand = math.Random();                                   // Add this variable

  double get width => size.x;
  double get height => size.y;

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    camera.viewfinder.anchor = Anchor.topLeft;

    world.add(PlayArea());

    world.add(Ball(                                             // Add from here...
        radius: ballRadius,
        position: size / 2,
        velocity: Vector2((rand.nextDouble() - 0.5) * width, height * 0.2)
            .normalized()
          ..scale(height / 4)));
    world.add(Bat(                                              // Add from here...
        size: Vector2(batWidth, batHeight),
        cornerRadius: const Radius.circular(ballRadius / 2),
        position: Vector2(width / 2, height * 0.95)));          // To here


    debugMode = true;
  }

@override                                                     // Add from here...
KeyEventResult onKeyEvent(
    KeyEvent event, Set<LogicalKeyboardKey> keysPressed) {
  super.onKeyEvent(event, keysPressed);
  switch (event.logicalKey) {
    case LogicalKeyboardKey.arrowLeft:
      world.children.query<Bat>().first.moveBy(-batStep);
    case LogicalKeyboardKey.arrowRight:
      world.children.query<Bat>().first.moveBy(batStep);
  }
  return KeyEventResult.handled;
}                                                             // To here
}
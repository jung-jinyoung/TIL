import 'package:flame/collisions.dart';
import 'package:flame/game.dart';
import 'components/play_area.dart';
import 'components/glassBall.dart';

import 'package:flame/components.dart';
import 'package:flame_forge2d/flame_forge2d.dart';

class MyGame extends Forge2DGame with HasCollisionDetection {
  final playArea = PlayArea();
  MyGame({required Vector2 screenSize})
      : super(
    zoom: 100,
    gravity: Vector2(500, screenSize.y),
    camera: CameraComponent.withFixedResolution(
      width: screenSize.x,
      height: screenSize.y,
    ),
  );
  final ball3 = GlassBall(
      assetURL: 'marble.png',
      position: Vector2(200, 400),
      radius: 60);

  final ball4 = GlassBall(
      assetURL: 'marble.png',
      position: Vector2(100, 600),
      radius: 50);

  @override
  Future<void> onLoad() async {
    await super.onLoad();
    await add(playArea); // 배경 화면 로드
    await add(ball3);
    await add(ball4);
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


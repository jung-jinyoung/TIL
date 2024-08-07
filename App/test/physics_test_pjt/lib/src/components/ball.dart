import 'package:flame/components.dart';
import 'package:flame/sprite.dart';
import 'package:flame/collisions.dart';
import 'package:flame/game.dart';
import 'dart:ui'; // Canvas를 사용하기 위해 dart:ui를 임포트

class Ball extends CircleComponent with HasGameRef, CollisionCallbacks {
  Ball({
    required this.velocity,
    required Vector2 position,
    required double radius,
    this.friction = 0.99, // 마찰력, 속도를 점차 감소시키는 비율
  }) : super(
    radius: radius,
    position: position,
    anchor: Anchor.center,
  );

  Vector2 velocity;
  final double friction; // 마찰력 변수
  late Sprite sprite;

  @override
  Future<void> onLoad() async {
    super.onLoad();
    // Sprite를 불러와서 저장
    sprite = await gameRef.loadSprite('marble.png');
  }

  @override
  void render(Canvas canvas) {
    // 원을 그리는 대신 스프라이트를 그립니다.
    sprite.render(
      canvas,
      size: Vector2.all(radius * 2),
      position: Vector2(-radius, -radius), // 스프라이트의 위치를 중심에 맞춥니다.
    );
  }

  @override
  void update(double dt) {
    super.update(dt);

    // 속도를 업데이트 (마찰력 적용)
    velocity *= friction;

    // 일정 속도 이하일 때 속도를 0으로 설정하여 멈추게 함
    if (velocity.length < 10) {
      velocity = Vector2.zero();
    }

    // 위치를 업데이트
    position += velocity * dt;

    final gameSize = gameRef.size;
    // 스크린 밖으로 나가지 않도록 clamp 함수 사용
    if (position.x - radius <= 0 || position.x + radius >= gameSize.x) {
      velocity.x = -velocity.x;
      position.x = position.x.clamp(radius, gameSize.x - radius);
    }

    if (position.y - radius <= 0 || position.y + radius >= gameSize.y) {
      velocity.y = -velocity.y;
      position.y = position.y.clamp(radius, gameSize.y - radius);
    }
  }

//   @override
//   void onCollisionStart(
//       Set<Vector2> intersectionPoints,
//       PositionComponent other,
//       ) {
//     super.onCollisionStart(intersectionPoints, other);
//
//     if (other is ScreenHitbox) {
//       final gameSize = gameRef.size;
//
//       if (position.x - radius <= 0 || position.x + radius >= gameSize.x) {
//         velocity.x = -velocity.x * 0.9; // 감쇠 효과 추가
//         position.x = position.x.clamp(radius, gameSize.x - radius);
//       }
//
//       if (position.y - radius <= 0 || position.y + radius >= gameSize.y) {
//         velocity.y = -velocity.y * 0.9; // 감쇠 효과 추가
//         position.y = position.y.clamp(radius, gameSize.y - radius);
//       }
//     }
//   }
}
import 'package:flame/components.dart';
import 'package:flame/sprite.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:flame/game.dart';
import 'dart:ui'; // Canvas를 사용하기 위해 dart:ui를 임포트


class GlassBall extends BodyComponent with HasGameRef<Forge2DGame> {
  final String assetURL;
  final Vector2 position;
  final double radius;
  final double collisionMargin; // 충돌 마진 추가



  GlassBall({
    required this.assetURL,
    required this.position,
    required this.radius,
    this.collisionMargin = 13, // 기본 충돌 마진 설정


  });

  late Sprite sprite;


  @override
  Future<void> onLoad() async {
    super.onLoad();
    sprite = await gameRef.loadSprite(assetURL) ;

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
    // 바디의 현재 위치를 가져옵니다.
    final pos = body.position;
    final gameSize = gameRef.size;

    // 스크린 밖으로 나가지 않도록 경계 검사 및 반응
    if (pos.x - radius <= 0 || pos.x + radius >= gameSize.x) {
      body.linearVelocity = Vector2(-body.linearVelocity.x, body.linearVelocity.y);
      body.setTransform(Vector2(pos.x.clamp(radius, gameSize.x - radius), pos.y), body.angle);
    }

    if (pos.y - radius <= 0 || pos.y + radius >= gameSize.y) {
      body.linearVelocity = Vector2(body.linearVelocity.x, -body.linearVelocity.y);
      body.setTransform(Vector2(pos.x, pos.y.clamp(radius, gameSize.y - radius)), body.angle);
    }

    // 각속도를 멈추는 로직
    if (body.linearVelocity.length < 0.1) {
      body.linearVelocity = Vector2.zero();
      body.angularVelocity = 0;
    }

  }
  @override
  Body createBody() {
    final bodyDef = BodyDef(
      position: position,
      type: BodyType.dynamic,
    );
    final shape = CircleShape()..radius =  radius  - collisionMargin; // 충돌 마진 적용; // 충돌 감지 경계
    final fixtureDef = FixtureDef(shape)
      ..density = 0.5// 밀도 (값이 높을 수록 무겁다)
      ..friction = 0.3 // 마찰력
      ..restitution = 0.2; // 반발력
    return world.createBody(bodyDef)
      ..createFixture(fixtureDef)
      ..angularVelocity = radians(60);
  }
}


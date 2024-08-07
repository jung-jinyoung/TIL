import 'package:flame/collisions.dart';
import 'package:flame/game.dart';
import 'components/play_area.dart';
import 'components/ball.dart';

class MyGame extends FlameGame with HasCollisionDetection {

  final playArea = new PlayArea();
  final ball1 = Ball(
    velocity: Vector2(0,300), // 초기 속도 설정
    position: Vector2(200, 700), // 초기 위치 설정
    radius: 50.0, // 구슬의 반지름 설정
  );
  // final ball2 = Ball(
  //   velocity: Vector2(120,300), // 초기 속도 설정
  //   position: Vector2(300, 700), // 초기 위치 설정
  //   radius: 40.0, // 구슬의 반지름 설정
  // );


  // 게임 인스턴스가 생성될때 실행하는 함수, 대부분 여기에 내용을 배치한다.
  @override
  Future<void> onLoad() async {
    await add(playArea); // 배경 화면 로드
    await add(ball1);
    // await add(ball2);
    await add(ScreenHitbox());
    super.onLoad();  }

  // 업데이트 되는 매 프레임마다 실행되는 로직
  @override
  void update(double dt) async {
    super.update(dt);
  }

  // 인스턴스가 해제될 떄 실행되는 로직
  @override
  void onRemove() {
    super.onRemove();
  }
}
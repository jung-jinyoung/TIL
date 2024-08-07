import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:flutter/material.dart';
import 'package:forge2d/forge2d.dart';

class Boundary extends BodyComponent {
  final Path path;

  Boundary(this.path);

  @override
  Body createBody() {
    final shape = ChainShape();
    final vertices = _convertPathToVertices(path);
    shape.createChain(vertices);

    final bodyDef = BodyDef()
      ..type = BodyType.static
      ..position = Vector2.zero();

    final fixtureDef = FixtureDef(shape);

    return world.createBody(bodyDef)..createFixture(fixtureDef);
  }

  List<Vector2> _convertPathToVertices(Path path) {
    final pathPoints = <Offset>[];
    path.computeMetrics().forEach((pathMetric) {
      for (var i = 0; i < pathMetric.length; i++) {
        final tangent = pathMetric.getTangentForOffset(i.toDouble());
        if (tangent != null) {
          pathPoints.add(tangent.position);
        }
      }
    });

    return pathPoints.map((point) => Vector2(point.dx, point.dy)).toList();
  }
}

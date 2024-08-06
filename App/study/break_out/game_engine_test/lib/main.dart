import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import 'src/brick_breaker.dart';                                // Add this import

void main() {
  final game = BrickBreaker();                                  // Modify this line
  runApp(GameWidget(game: game));
}
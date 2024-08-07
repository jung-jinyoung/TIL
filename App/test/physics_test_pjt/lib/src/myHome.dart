import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import './myGame.dart';                                // Add this import


class HomeHourglassPage extends StatefulWidget {
  @override
  _HomeHourglassPageState createState() => _HomeHourglassPageState();
}

class _HomeHourglassPageState extends State<HomeHourglassPage> {
  @override
  Widget build(BuildContext context) {
    final game = MyGame();

    return Scaffold(
      body: Center(
        child: GameWidget(
          game: game,
        )
      ),
    );
  }
}
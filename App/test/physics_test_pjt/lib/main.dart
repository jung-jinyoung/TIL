import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import 'src/myHome.dart';                                // Add this import


void main() {
  runApp(HomeHourglassApp());
}

class HomeHourglassApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // title: 'Hourglass Game',
      // theme: ThemeData(
      //   primarySwatch: Colors.blue,
      // ),
      home: HomeHourglassPage(),
    );
  }
}
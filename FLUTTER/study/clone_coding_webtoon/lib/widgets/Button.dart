import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  // const Butt({super.key});
  final String text;
  final Color bgColor;

  const Button({super.key, required this.text, required this.bgColor});

  // 생성자 함수
  

  @override
  Widget build(BuildContext context) {
   return Container(
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(45)
      ),
      child:Padding(
        padding: const EdgeInsets.symmetric(
        vertical: 15,
        horizontal: 50,
      ),
      child : Text(text,
      style: const TextStyle(
        fontSize: 18,
      ),)
      )
    );
  }
}
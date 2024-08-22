import 'package:clone_coding_webtoon/widgets/Button.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF181818),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(
                height: 80,
              ),
              const Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        'Hey, Selena',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 28,
                            fontWeight: FontWeight.w600),
                      ),
                      Text('Welcome back',
                          style: TextStyle(
                            color: Color.fromRGBO(255, 255, 255, 0.8),
                            fontSize: 18,
                          )),
                    ],
                  )
                ],
              ),
              const SizedBox(
                height: 120,
                ),
                Text('Total Balance',
                style: TextStyle(
                  fontSize:22,
                  color: Colors.white.withOpacity(0.8)
                ),),
                const SizedBox(
                  height: 10,
                ),
                const Text(
                  '%5 194 482',
                style: TextStyle(
                  fontSize:42,
                  fontWeight: FontWeight.w600,
                  color: Colors.white
                ),),
                const SizedBox(height: 20,),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Button(text: 'Transfer', bgColor:Color(0xFFF1B33B)),
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFF1F2123),
                        borderRadius: BorderRadius.circular(45)
                      ),
                      child: const Padding(padding: EdgeInsets.symmetric(
                        vertical: 15,
                        horizontal: 50,
                      ),
                      child : Text('Request',
                      style: TextStyle(
                        fontSize: 18,
                        color : Colors.white,
                      ),)
                      )
                    )
                  ],
                ),
              const SizedBox(
                height: 100,
              ),
              Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Wallet',
                    style : TextStyle(
                      color : Colors.white,
                      fontSize: 36,
                      fontWeight: FontWeight.w600
                    ),
                    ),
                    Text(
                      'View all',
                      style: TextStyle(
                        color : Colors.white.withOpacity(0.8),
                        fontSize: 18
                      ),
                    )
                ],
              ),
            const SizedBox(
              height: 20,
            ),
            Container(
              decoration: BoxDecoration(
                color : const Color(0xFF1F2123),
                borderRadius: BorderRadius.circular(25) 
              ),
              child : const Padding(
                padding: EdgeInsets.all(30),
                child : Row(
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Euro',
                          style : TextStyle(
                            color : Colors.white,
                            fontSize:32,
                            fontWeight: FontWeight.w600
                          )
                        ),
                        SizedBox(
                        height: 10,
                        ),
                        Row(
                          children: [
                            Text(
                              '6 428',
                              style: TextStyle(
                              color : Colors.white,
                              fontSize: 20
                              ),
                            ),
                            SizedBox(
                              width : 5,
                            ),
                            Text(
                              'EUR',
                              style : TextStyle(
                              color : Colors.white,
                              fontSize: 20,
                              )
                            )
                          ],
                        ),
                       
        
                      ],
                    )
                  ],
                ))
            ),
          
          

            ],
          ),
        ),
      ),
    );
  }
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

// UI 변경되는 부분 
class _AppState extends State<App> {
  int counter = 0 ; 
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}


class MyButton extends StatelessWidget {
  const MyButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.amber,
        borderRadius: BorderRadius.circular(45)
      ),
      child: const Padding(padding: EdgeInsets.symmetric(
        vertical: 15,
        horizontal: 50,
      ),
      child : Text('Tansfer',
      style: TextStyle(
        fontSize: 18,
      ),)
      )
    );
  }
}

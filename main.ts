import { Injectable, bootstrap } from 'fluency-injection';

@Injectable
class TestDependency {
  constructor() {}

  public sayHello() {
    console.log('Hello!');
  }
}

@Injectable
class Main {
  constructor(testDependency: TestDependency) {
    testDependency.sayHello();
  }
}

bootstrap(Main);
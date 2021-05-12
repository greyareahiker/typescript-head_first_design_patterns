import QuackBehavior from './QuackBehavior'

class Quack implements QuackBehavior {
  public quack (): void {
    console.log('꽥')
  }
}

export default Quack

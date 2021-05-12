import FlyBehavior from './FlyBehavior'
import QuackBehavior from './QuackBehavior'

abstract class Duck {
  abstract flyBehavior: FlyBehavior
  abstract quackBehavior: QuackBehavior

  abstract display (): void

  public performFly (): void {
    this.flyBehavior.fly()
  }

  public performQuack (): void {
    this.quackBehavior.quack()
  }

  public swim (): void {
    console.info('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠.')
  }
}

export default Duck

import { FlyBehavior } from './FlyBehavior'
import { QuackBehavior } from './QuackBehavior'

export abstract class Duck {
  abstract flyBehavior: FlyBehavior
  abstract quackBehavior: QuackBehavior

  abstract display (): void

  performFly (): void {
    this.flyBehavior.fly()
  }

  performQuack (): void {
    this.quackBehavior.quack()
  }

  swim (): void {
    console.info('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠.')
  }

  setFlyBehavior (fb: FlyBehavior): void {
    this.flyBehavior = fb
  }

  setQuackBehavior (qb: QuackBehavior): void {
    this.quackBehavior = qb
  }
}

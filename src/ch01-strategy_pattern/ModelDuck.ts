import { Duck } from './Duck'
import { FlyNoWay } from './FlyNoWay'
import { Quack } from './Quack'

export class ModelDuck extends Duck {
  flyBehavior = new FlyNoWay()
  quackBehavior = new Quack()

  display (): void {
    console.log('저는 모형 오리입니다.')
  }
}

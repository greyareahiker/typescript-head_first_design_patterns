import Duck from './Duck'
import FlyWithWings from './FlyWithWings'
import Quack from './Quack'

class MallardDuck extends Duck {
  quackBehavior = new Quack()
  flyBehavior = new FlyWithWings()

  public display (): void {
    console.log('저는 물오리입니다.')
  }
}

export default MallardDuck

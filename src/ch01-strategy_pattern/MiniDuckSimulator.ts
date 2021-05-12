import { Duck } from './Duck'
import { FlyRocketPowered } from './FlyRocketPowered'
import { MallardDuck } from './MallardDuck'
import { ModelDuck } from './ModelDuck'

export const init = (): void => {
  console.log('===== start ch1 =====')
  const mallard: Duck = new MallardDuck()

  mallard.performQuack()
  mallard.performFly()

  const model: Duck = new ModelDuck()
  model.performFly()
  model.setFlyBehavior(new FlyRocketPowered())
  model.performFly()
}

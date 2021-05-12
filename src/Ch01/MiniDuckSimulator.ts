import { Duck } from './Duck'
import { MallardDuck } from './MallardDuck'

export const init = (): void => {
  const mallard: Duck = new MallardDuck()

  console.log('start ch1')
  mallard.performQuack()
  mallard.performFly()
}

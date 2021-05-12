import Duck from './Duck'
import MallardDuck from './MallardDuck'

const mallard: Duck = new MallardDuck()

const init = (): void => {
  console.log('start ch1')
  mallard.performQuack()
  mallard.performFly()
}

export default init

import { FlyBehavior } from './FlyBehavior'

export class FlyNoWay implements FlyBehavior {
  public fly = (): void => {
    console.log('저는 못 날아요')
  }
}

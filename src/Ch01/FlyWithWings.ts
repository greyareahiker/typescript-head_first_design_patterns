import { FlyBehavior } from './FlyBehavior'

export class FlyWithWings implements FlyBehavior {
  public fly = (): void => {
    console.log('날고 있어요')
  }
}

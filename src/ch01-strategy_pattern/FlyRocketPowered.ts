import { FlyBehavior } from './FlyBehavior'

export class FlyRocketPowered implements FlyBehavior {
  fly (): void {
    console.log('로켓 추진으로 날아갑니다')
  }
}

import FlyBehavior from './FlyBehavior'

class FlyNoWay implements FlyBehavior {
  public fly (): void {
    console.log('저는 못 날아요')
  }
}

export default FlyNoWay

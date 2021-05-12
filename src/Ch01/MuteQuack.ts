import QuackBehavior from './QuackBehavior'

class MuteQuack implements QuackBehavior {
  public quack (): void {
    console.log('<< 조용~ >>')
  }
}

export default MuteQuack

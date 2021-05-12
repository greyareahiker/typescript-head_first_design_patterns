import { QuackBehavior } from './QuackBehavior'

export class MuteQuack implements QuackBehavior {
  quack (): void {
    console.log('<< 조용~ >>')
  }
}

import { QuackBehavior } from './QuackBehavior'

export class Quack implements QuackBehavior {
  quack (): void {
    console.log('꽥')
  }
}

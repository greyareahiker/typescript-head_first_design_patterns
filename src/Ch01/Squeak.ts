import { QuackBehavior } from './QuackBehavior'

export class Squeak implements QuackBehavior {
  quack (): void {
    console.log('삑')
  }
}

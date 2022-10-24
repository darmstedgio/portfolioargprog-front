export class NewUser {
  constructor(
              public name: string,
              public username: string,
              public email: string,
              public password: string,
              public authorities: Array<string>
              ){}
}

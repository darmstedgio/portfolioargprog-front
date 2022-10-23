export class NewUser {
  constructor(
              public name: String,
              public username: String,
              public email: String,
              public password: String,
              public authorities: Array<String>
              ){}
}

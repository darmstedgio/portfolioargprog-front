export class JwtDTO {
  constructor(
              public token: String,
              public type: String,
              public username: String,
              public authorities: Array<String>
              ){}
}

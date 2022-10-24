export class JwtDTO {
  constructor(
              public token: string,
              public type: string,
              public username: string,
              public authorities: Array<string>
              ){}
}

export class JwtDTO {
  constructor(
              public access_token: string,
              public type: string,
              public user_email: string,
              ){}
}

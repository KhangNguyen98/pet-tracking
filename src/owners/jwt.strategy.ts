import { UnauthorizedException } from '@nestjs/common';
import { Owner } from './owner.entity';
import { JWTPayLoad } from './jwt-payload.interface';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJWT } from 'passport-jwt';

export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretkey: 'secretkey',
    });
  }

  async validate(payload: JWTPayLoad) {
    const { username } = payload;
    if (!(await Owner.findOne({ username }))) {
      throw new UnauthorizedException('Unauthorized');
    }
    return username;
  }
}

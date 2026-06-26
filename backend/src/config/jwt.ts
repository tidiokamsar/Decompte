import jwt from 'jsonwebtoken';
import config from './index';

const jwtConfig = config.jwt;

export interface JWTPayload {
  userId: string;
  username: string;
  role: string;
  permissions?: string[];
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });
}

export function generateRefreshToken(payload: JWTPayload): string {
  return jwt.sign(payload, jwtConfig.refreshSecret, {
    expiresIn: jwtConfig.refreshExpiresIn,
  });
}

export function verifyToken(token: string): JWTPayload {
  try {
    return jwt.verify(token, jwtConfig.secret) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

export function verifyRefreshToken(token: string): JWTPayload {
  try {
    return jwt.verify(token, jwtConfig.refreshSecret) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
}

export default {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken,
};

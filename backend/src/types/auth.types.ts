export interface IAuthRequest extends Express.Request {
  user?: {
    userId: string;
    username: string;
    role: string;
    permissions?: string[];
  };
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

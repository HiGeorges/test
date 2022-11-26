export interface ILogin {
  email: string;
  token: number;

  timestamp: Date;
}

export type LoginDocument = ILogin & Document;

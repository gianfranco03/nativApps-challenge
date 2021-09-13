export interface IUserStateType {
  data: Array<any>;
  loading: boolean;
  error: any;
}

export interface IActionType {
  type: string;
  payload: any;
  error: any;
}

export interface IMoviesParams {
  s?: string;
  y?: string;
  type?: string;
}

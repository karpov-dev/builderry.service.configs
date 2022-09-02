export interface ISetupInstance {
  ORDER: number,
  NAME: string
  DEV: {
    SETUP_URL: string,
    GIT_URL: string
  },
  PROD: {
    SETUP_URL: string,
    GIT_URL: string
  }
}
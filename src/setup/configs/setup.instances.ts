import {ISetupInstance} from "../interfaces";

export const SETUP_INSTANCES = {
  FRONT_END: {
    AUTH: {
      ORDER: 1,
      NAME: 'ui.setup.auth',
      DEV: {
        SETUP_URL: 'http://localhost:3101/setup',
        GIT_URL: 'https://github.com/karpov-dev/builderry.ui.auth.micro.git'
      },
      PROD: {
        SETUP_URL: 'http://localhost:3101/setup',
        GIT_URL: 'https://github.com/karpov-dev/builderry.ui.auth.micro.git'
      }
    } as ISetupInstance,
  },
}
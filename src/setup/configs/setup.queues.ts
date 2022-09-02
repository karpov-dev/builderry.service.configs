import {SETUP_INSTANCES} from "./setup.instances";
import {ISetupInstance} from "../interfaces";

export const SETUP_QUEUES = {
  WORKSPACE: {
   SETUP_INSTANCES: [SETUP_INSTANCES.FRONT_END.AUTH] as Array<ISetupInstance>
  }
}
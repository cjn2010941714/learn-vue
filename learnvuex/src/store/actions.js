import {UPDATEINFO} from "./mutations-types";

export default  {
  aUpdateInfo(context,payload) {
    setTimeout(() => {
      console.log(payload);
      context.commit(UPDATEINFO);
    },1000)
  }
}

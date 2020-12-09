import {get,post} from '../utils/http'
const Api = {
  getFooData(){
    return get("/api/dataHome.json",{})

  }
}
export default Api


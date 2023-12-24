import { getData, postData } from "./model.js";
import { default as updateUI } from "./view.js";

// -- CONTROL --
async function start() {
  // 1. Get list of posts from server - GET
  let data = await getData();
  updateUI(data);

  // 2. Create new post on server - POST
  data = await postData();
  alert(`${data.id} - ${data.title}`);
}

export default start;
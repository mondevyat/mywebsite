export function currentTime() {
  let moment = require("moment");
  let now = moment().format("hh:mm A");
  return now;
}

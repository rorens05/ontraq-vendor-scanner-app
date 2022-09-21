const moment = require('moment-timezone');

export const dateConverter = (date) => {
  var ph_time = moment.tz(date, 'Asia/Manila');
  return ph_time
}

export const currentDate = () => {
  var curr_date = moment.tz(`${new Date()}`, 'Asia/Manila')
  return curr_date
}
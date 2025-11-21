const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
// server current time
const d = dayjs(); // gmt
console.log(d.format()); // server time in ISO 8601 format

// convert a date to a specified timezone
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

const dateInFrance = dayjs().tz("Europe/Paris");
console.log(dateInFrance.format()); // France time in ISO 8601 format

// convert a date to utc
const dateInUTC = dayjs().utc();
console.log(dateInUTC.format()); // UTC time in ISO 8601 format

// create a date in a specified timezone
const dateString = "2025-11-10";
const parisDate = dayjs.tz(dateString, "Europe/Paris").startOf("day");
console.log(parisDate.format()); // parsed date in ISO 8601 format
const utcDate = parisDate.utc();
console.log(utcDate.format()); // converted to UTC in ISO 8601 format

const da = dayjs("2025-11-10").toDate();
const daStr = dayjs(da).format("YYYY-MM-DD");
console.log(daStr);
const startDateParis = dayjs.tz(daStr, "Europe/Paris").startOf("day");
console.log(startDateParis.format());
const startDateUTC = startDateParis.utc();
console.log(startDateUTC.format());

const cronjobs = require("../src/cronjobs");

const job1 = new cronjobs("*/1 * * * * *", () =>
  console.log(new Date().toString())
);

job1.start();

// wait 10 seconds then stop the cron job
setTimeout(() => {
  job1.stop();
}, 10000);

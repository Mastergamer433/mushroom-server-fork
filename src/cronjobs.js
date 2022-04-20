const cron = require("cron").CronJob;

module.exports = class Cronjob {
  constructor(schedule, callback) {
    this.cronjob = new cron(schedule, callback, null, false);
  }
  start = () => this.cronjob.start();
  stop = () => this.cronjob.stop();
};

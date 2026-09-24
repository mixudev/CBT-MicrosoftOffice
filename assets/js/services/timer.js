/**
 * Exam Timer Module
 * Implements high-reliability timestamp-based countdown.
 * Resilient against page refreshes, tab throttling, and computer sleep.
 */

class ExamTimer {
  /**
   * @param {Object} options
   * @param {number} options.endsAt  - Unix timestamp (ms) when exam expires
   * @param {function} options.onTick    - Called every ~500ms: { formatted, remainingSeconds, isUrgent, isWarning }
   * @param {function} options.onWarning - Called once per threshold: '10_MINUTES' | '5_MINUTES' | '1_MINUTE'
   * @param {function} options.onExpire  - Called once when 00:00 reached
   */
  constructor(options = {}) {
    this.endsAt  = options.endsAt || Date.now() + 50 * 60 * 1000;
    this.onTick    = options.onTick    || (() => {});
    this.onWarning = options.onWarning || (() => {});
    this.onExpire  = options.onExpire  || (() => {});

    this.timerId = null;

    // Pre-seed warning flags based on current remaining time.
    // This prevents already-past thresholds from firing on page recover/refresh.
    const currentRemaining = Math.ceil(Math.max(0, this.endsAt - Date.now()) / 1000);
    this.warningsTriggered = {
      tenMinutes:  currentRemaining <= 600,
      fiveMinutes: currentRemaining <= 300,
      oneMinute:   currentRemaining <= 60
    };
  }

  start() {
    this.stop();
    this.tick();
    this.timerId = setInterval(() => this.tick(), 500);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  getRemainingMs() {
    return Math.max(0, this.endsAt - Date.now());
  }

  getRemainingSeconds() {
    return Math.ceil(this.getRemainingMs() / 1000);
  }

  isExpired() {
    return this.getRemainingMs() <= 0;
  }

  formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  tick() {
    const remainingSecs = this.getRemainingSeconds();
    const formatted = this.formatTime(remainingSecs);

    // Warning triggers — each fires exactly once per exam session.
    if (remainingSecs > 0) {
      // Peringatan 10 menit dihilangkan sesuai request
      if (remainingSecs <= 300 && !this.warningsTriggered.fiveMinutes) {
        this.warningsTriggered.fiveMinutes = true;
        this.onWarning('5_MINUTES', remainingSecs);
      }
      if (remainingSecs <= 60 && !this.warningsTriggered.oneMinute) {
        this.warningsTriggered.oneMinute = true;
        this.onWarning('1_MINUTE', remainingSecs);
      }
    }

    // Tick callback
    this.onTick({
      formatted,
      remainingSeconds: remainingSecs,
      isUrgent:  remainingSecs <= 60,
      isWarning: remainingSecs <= 300
    });

    // Expiry
    if (remainingSecs <= 0) {
      this.stop();
      this.onExpire();
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ExamTimer };
}

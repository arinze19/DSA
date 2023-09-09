class RecentCounter {
  benchmark: number;
  queue: number[];

  constructor() {
    this.benchmark = 3000;
    this.queue = [];
  }
  // once we log a ping, we return every request logged from said time (t - 3000)
  // we call a ping
  // [{ seconds: index }]
  // once i add a new ping, i can simply get the difference?

  // const BENCHMARK = get t - 3000 - deal in absolutes
  // loop through array to findIndex of first value whose seconds is less than BENCHMARK
  // slice from array and then return length
  // re-assign queue to new array

  ping(t: number): number {
    // get difference between t and 3000
    const diff = t - this.benchmark;
    this.queue.unshift(t);

    const id = this.queue.findIndex((item) => item < diff);

    // if id is found, modify queue
    if (id > -1) {
      // slice
      this.queue.splice(id + 1);
    }

    // return queue length
    return this.queue.length;
  }
}
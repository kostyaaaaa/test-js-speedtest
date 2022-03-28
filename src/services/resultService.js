class Results {
  constructor(title1, title2) {
    this.results = {
      [title1]: 0,
      [title2]: 0,
    };
  }

  push = (...results) => {
    results.forEach((res) => {
      this.results[res] += 1;
    });
  };

  getStats = () => {
    return this.results;
  };
}

module.exports = Results;

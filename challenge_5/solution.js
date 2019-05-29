

function calcTipsAndValues() {
  // todo calc tips and values using this

  this.tips = this.bills.map(b => {
    if (b <= 50) return b * .2;
    if (b <= 200) return b * .15;
    return b * .1
  })

  this.finalValues = this.bills.map((b,i) => this.bills[i] + this.tips[i]);
}

function getAverageTip() {
  // get tips from context and calc average tip
  return this.tips.reduce((s, t) => s + t, 0) / this.tips.length;
}


const john = {
  name: 'John Doe',
  bills: [100, 40, 250],
  tips: null,
  finalValues: null,
  calcTipsAndValues: calcTipsAndValues,
  getAverageTip: getAverageTip,
}
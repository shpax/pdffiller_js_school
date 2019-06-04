




const John = {
  name: 'John Doe',
  bills: [100, 40, 250],
  tips: null,
  finalValues: null,
  calcTipsAndValues,
  getAverageTip,
}

const Sarah = {
  name: 'Sarah Doe',
  bills: [80, 20, 210],
  tips: null,
  finalValues: null,
  calcTipsAndValues,
  getAverageTip,
}

function calcTipsAndValues() {
  // todo calc tips and values using this context

  this.tips = this.bills.map((b) => {
    if (b <= 50) return b * .2;
    if (b <= 200) return b * .15;
    return b * .1
  })

  this.finalValues = this.bills.map((b,i) => b + this.tips[i]);
}

function getAverageTip() {
  // get tips from context and calc average tip
  const tipsSum = this.tips.reduce((sum, t) => sum + t, 0);

  return tipsSum / this.tips.length;
}
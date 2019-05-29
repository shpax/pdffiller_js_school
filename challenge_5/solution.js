

var John = {
  name: 'John Doe',
  bills: [100, 40, 250],
  tips: null,
  finalValues: null,
  calcTipsAndValues: calcTipsAndValues,
  getAverageTip: getAverageTip,
}

var Sarah = {
  name: 'Sarah Doe',
  bills: [80, 20, 210],
  tips: null,
  finalValues: null,
  calcTipsAndValues: calcTipsAndValues,
  getAverageTip: getAverageTip,
}

function calcTipsAndValues() {
  // todo calc tips and values using this context

  this.tips = this.bills.map(function (b) {
    if (b <= 50) return b * .2;
    if (b <= 200) return b * .15;
    return b * .1
  })

  var bills = this.bills;
  var tips = this.tips;

  this.finalValues = this.bills.map(function(b,i) { 
    return bills[i] + tips[i];
  });
}

function getAverageTip() {
  // get tips from context and calc average tip
  var tipsSum = this.tips.reduce(function(s, t) { 
    return s + t 
  }, 0);

  return tipsSum / this.tips.length;
}
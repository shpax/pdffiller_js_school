const expect = chai.expect

describe('John', function(){
  it('has bills, but no tips & payments', function(){
    expect(john.bills).to.have.members([100, 40, 250]);
    expect(john.finalValues).to.be.null;
    expect(john.tips).to.be.null;
  });

  it('can calc tips & payments with calcPayments', () => {
    john.calcTipsAndValues();

    expect(john.finalValues).to.have.members([115, 48, 275]);
  })


  it('can calc average tips using only tips array', () => {
    const averageTip = john.getAverageTip();

    try {
      getAverageTip.call({ tips: [1,2,3] });
    } catch (e) {
      throw new Error('you should use only tips array');
    }

    expect(averageTip).to.have.equal(16);
  })
});

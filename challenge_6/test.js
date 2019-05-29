const expect = chai.expect

describe('Animals Zoo', () => {
  it('createAnimal', function(){
    expect(obj.bills).to.be.not.null;
    expect(obj.finalValues).to.be.null;
    expect(obj.tips).to.be.null;
  });

  it('can calc tips & payments with calcPayments', () => {
    obj.calcTipsAndValues();

    const { tips, finalValues } = calcTipsAndValuesChecker(obj.bills)
    expect(obj.finalValues).to.have.members(finalValues);
    expect(obj.tips).to.have.members(tips);
  })


  it('can calc average tips using only tips array', () => {
    const averageTip = obj.getAverageTip();

    try {
      getAverageTip.call({ tips: [1,2,3] });
    } catch (e) {
      throw new Error('you should use only tips array');
    }

    expect(averageTip).to.have.equal(obj.tips.reduce((sum, t) => sum + t, 0) / obj.tips.length);
  })
});

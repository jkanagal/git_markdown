const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function () {

  it("should return false if it's a hatchback", function () {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return true if the user is old enough", function () {
    const user = {
      age: 18 // Edge Case
    };
    const canSignUp = signUpUser(user);
    assert.isTrue(canSignUp);
  });

  // Sad Path
  it("should return false if the user is not old enough", function () {
    const user = {
      age: 17 // Edge Case
    };
    const canSignUp = signUpUser(user);
    assert.isFalse(canSignUp);
  });
});
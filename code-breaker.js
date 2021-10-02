class CodeBreaker {
  constructor() {
    this.setDefaultSecret();
  }

  guess(guess, secret = null) {
    if (!secret) {
      secret = this.defaultSecret;
    }
    let result = "";
    for (let index = 0; index < secret.length; index++) {
      let letter = secret.charAt(index);

      let index_num = guess.indexOf(letter);
      if (index_num !== -1) {
        if (letter == guess.charAt(index)) {
          result += "X";
        } else {
          result += "-";
        }
      }
    }
    return result;
  }

  setDefaultSecret() {
    var result = "";
    var characters = "123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.defaultSecret = result;
    console.log("The default secret updated to", this.defaultSecret);
  }
}

module.exports = CodeBreaker;

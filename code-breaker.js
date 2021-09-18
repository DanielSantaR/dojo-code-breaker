function guess(secret, guess) {
    let result = "";
    for (let index = 0; index < secret.length; index++) {
        let index_num = guess.indexOf(secret.charAt(index));
        if (index_num !== -1) {
            if (index_num === index) {
                result += "X";
            } else {
                result += "-";
            }
        }
    }
    return result;
}
module.exports.guess = guess;

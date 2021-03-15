module.exports = function check(str, bracketsConfig) {
       let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
        '|': '|'
    }
    let amount = 0;
    let slashesAmount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            if (str.length % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' || (str[i] === '|' && (slashesAmount % 2 === 0))) {

            if (str[i] === '|') {
                slashesAmount += 1;
            }

            stack.push(str[i]);
        } else {
            if (str[i] === '|') {
                slashesAmount += 1;
            }
            let last = stack.pop();

            if (str[i] !== map[last]) { return false };
        }
    }
    if (stack.length !== 0) { return false };

    return true;
}

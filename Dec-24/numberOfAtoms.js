/*

Given a string formula representing a chemical formula, return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.

For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
Two formulas are concatenated together to produce another formula.

For example, "H2O2He3Mg4" is also a formula.
A formula placed in parentheses, and a count (optionally added) is also a formula.

For example, "(H2O2)" and "(H2O2)3" are formulas.
Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

The test cases are generated so that all the values in the output fit in a 32-bit integer.

*/

const countOfAtoms = formula => {
    const stack = [new Map()];
    const n = formula.length;
    let i = 0;

    const parseAtom = () => {
        const start = i++;
        while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
            i++;
        }
        return formula.substring(start, i);
    };

    const parseNum = () => {
        if (i === n || isNaN(formula[i])) {
            return 1;
        }
        let num = 0;
        while (i < n && !isNaN(formula[i])) {
            num = num * 10 + parseInt(formula[i++]);
        }
        return num;
    };

    while (i < n) {
        if (formula[i] === '(') {
            stack.push(new Map());
            i++;
        } else if (formula[i] === ')') {
            i++;
            const num = parseNum();
            const top = stack.pop();
            const prev = stack[stack.length - 1];
            for (const [atom, count] of top) {
                prev.set(atom, (prev.get(atom) || 0) + count * num);
            }
        } else {
            const atom = parseAtom();
            const num = parseNum();
            const top = stack[stack.length - 1];
            top.set(atom, (top.get(atom) || 0) + num);
        }
    }

    const map = stack.pop();
    const atoms = Array.from(map.keys()).sort();
    let result = '';
    for (const atom of atoms) {
        result += atom + (map.get(atom) > 1 ? map.get(atom) : '');
    }

    return result;
};

// Test Cases
console.log(countOfAtoms('H2O')); // 'H2O'
console.log(countOfAtoms('Mg(OH)2')); // 'H2MgO2'
console.log(countOfAtoms('K4(ON(SO3)2)2')); // 'K4N2O14S4'

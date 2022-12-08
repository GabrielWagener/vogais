const example = 'Paraguai';

var semConsoantes = example.replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y)/gi, '')

const diff = (diffMe, diffBy) => diffMe.split(diffBy).join('')

const C = diff(semConsoantes, example )

console.log(C);


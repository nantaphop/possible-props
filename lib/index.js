const flatten = arr => [].concat.apply([], arr)
const possibleProps = props => {
    let pairs = Object.keys(props)
        .map(k => props[k].map(v => [k, v]))
        console.log(pairs)
    let allPossibleProps = pairs
        .reduce((acc, set) =>
            flatten(acc.map(x => set.map(y => [ ...x, y ]))),
        [[]])
        .map(pairsArr => pairsArr.reduce((result, [k, v]) => ({...result, [k]: v}), {}))
    return allPossibleProps
}

export default possibleProps
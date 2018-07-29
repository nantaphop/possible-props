import styled, {css} from 'styled-components'

const SIZE = {
    mini: css`
        padding: 4px;
    `,
    xl: css`
        padding: 16px;
    `,
    default: css`
        padding: 8px;
    `
}

const BORDERED = {
    dashed: css`
        border: dashed;
    `,
    default: css`
        border: solid;
    `
}

const BTN_STYLE = {
    warning: css`
        color: black;
        background-color: yellow;
    `,
    danger: css`
        color: white;
        background-color: red;
    `,
    default: css`
        color: black;
        background-color: lightblue;
    `
}

const calculate = CONFIG => fromProps => props => props[fromProps] ? CONFIG[props[fromProps]] : CONFIG.default

export default styled.button`
    max-width: 100px;
    text-align: center;
    vertical-align: center;
    ${calculate(SIZE)('size')}
    ${calculate(BTN_STYLE)('btnStyle')}
    ${calculate(BORDERED)('bordered')}
`
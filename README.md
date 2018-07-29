# Possible Props
Utility to generate all combination of possible props of components. Useful with Storybook

## Motivation
Mostly our components received a lot of props to customized how its look. But it difficult to visualized every possible props that can be together. So, I create simple utility function that should be use in `Storybook` stories to generate all props for our components.

Basically, the algorithm is just a *Cartesian Product* from https://eddmann.com/posts/cartesian-product-in-javascript/ with some adapt for React's props

## Installation
```
npm install possible-props
```

## Example Usage (Storybook)
Let say we have a Button Component which received several props, `btnStyle`, `size`, `bordered` and `children`
```javascript
    import possibleProps from 'possibleProps'

    ...
    
    storiesOf('Button', module)
    .add('Custom Render Story', () => <Container>
        {
            possibleProps({
                btnStyle: ['danger', 'warning', 'default'],
                size: ['mini', 'xl', 'default'],
                children: ['Short Text', 'Longggggggggg Text'],
                bordered: ['dashed', 'default'],
            }).map(generateProps => <Row>
            <PropsPreview>
                {JSON.stringify(generateProps, null, 2)}
            </PropsPreview>
            <Button onClick={action('clicked')} {...generateProps} />
            </Row>)
        }
        </Container>)
```

## Result Render
![PossibleProps Gif](https://media.giphy.com/media/3Mcy7HZ4YJD0bTkxSM/giphy.gif)

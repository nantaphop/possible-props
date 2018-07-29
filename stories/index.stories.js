import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import styled from 'styled-components'

import Button from './Button'
import possibleProps from '../lib/index'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Row = styled.div`
  display: flex;
  width: 40%;
  padding: 8px;
  align-items: flex-start;
  border: grey solid 1px;
`

const PropsPreview = styled.pre`
  background-color: lightgrey;
  margin-right: 16px;
`

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

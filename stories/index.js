import React from 'react'
import 'common/style.scss'
import './storyStyles.scss'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import {linkTo} from '@storybook/addon-links';

// import { withKnobs,
//   text,
//   // boolean,
//   // number
// } from '@storybook/addon-knobs';

const styleDecorator = storyFn => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {storyFn()}
  </div>
)

addDecorator(styleDecorator)

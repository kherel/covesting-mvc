import React from 'react';
import * as T from "prop-types";
import A_Svg from 'A_Svg'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Logo')
import {Link} from 'react-router'

const M_Logo = ({mix}) => (
  <Link className={cn([mix])} to="/">
    <A_Svg
      type='logo-white'
      mx={cn('svg-image')}
    />
  </Link>
)


M_Logo.propTypes = {
  mix: T.string, //BEM mixin from parent block, parent should control all positioning
  type: T.oneOf([
    'full', // adds "crypto intelligence" text to logo
  ])
}

export default M_Logo
import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')

const A_P = ({children, type, mx}) =>(
  <p className={cn({type}, [mx])}>{children}</p>
)

A_P.propTypes = {
  type: T.oneOf([
    'subtitle', //*** 12/19 section-subtitle
  ]),
};

export default A_P
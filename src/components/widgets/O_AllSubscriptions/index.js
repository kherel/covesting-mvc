import React from 'react'
import * as T from 'prop-types'
import './style.scss'
import { cssClassName } from 'utils'
import A_Card from 'A_Card'
import A_H from 'A_H'
import A_Th from 'A_Th'
import A_ThSortable from 'A_ThSortable'
import A_TableRow from 'A_TableRow'
import A_Image from 'A_Image'
import A_Span from 'A_Span'
import A_ColoredUsdValue from 'A_ColoredUsdValue'
import A_Button from 'A_Button'

const list = [
  {
    trader: { name: 'Katherine Reyes', imgId: 2 },
    weight: 15,
    totalReturn: 170000,
    strategy: 'Core and Satellite',
  },
  {
    trader: { name: 'Katherine Reyes', imgId: 2 },
    weight: 50,
    totalReturn: 10000,
    strategy: 'Core and Satellite',
  },
  {
    trader: { name: 'Katherine Reyes', imgId: 2 },
    weight: 20,
    totalReturn: 270000,
    strategy: 'Core and Satellite',
  },
  {
    trader: { name: 'Katherine Reyes', imgId: 2 },
    weight: 30,
    totalReturn: 15000,
    strategy: 'Core and Satellite',
  },
  {
    trader: { name: 'Katherine Reyes', imgId: 2 },
    weight: 10,
    totalReturn: 6000,
    strategy: 'Core and Satellite',
  },
]

const cn = cssClassName('O_AllSubscriptions')

const O_AllSubscriptions = ({ mix }) => (
  <A_Card mix={cn([mix])}>
    <A_H type="section" mix={cn('title')}>
      All subscriptions
    </A_H>
    <div className={cn('table-header')}>
      <A_Th mix={cn('th-1')}>Trader</A_Th>
      <A_ThSortable mix={cn('th-2')}>Total Weight</A_ThSortable>
      <A_ThSortable mix={cn('th-3')}>Total Return</A_ThSortable>
      <A_Th mix={cn('th-4')}>Strategy name</A_Th>
      <A_Th mix={cn('th-5')}>Action</A_Th>
    </div>

    <div className={cn('list')}>
      {list.map(({ trader: { name, imgId }, weight, totalReturn, strategy }) => (
        <A_TableRow type="border-blurred" mix={cn('item')}>
          <div className={cn('th-1')}>
            <A_Image
              rounded
              width={19}
              height={19}
              alt={name}
              mix={cn('logo')}
              src={`img/userpics/userpic${imgId}.png`}
            />
            <A_Span type="table-medium">{name}</A_Span>
          </div>
          <A_Span mix={cn('th-2')} type="table-small">{`${weight}%`}</A_Span>
          <A_ColoredUsdValue mix={cn('th-3')} value={totalReturn} />
          <A_Span type="table-small-bold" mix={cn('th-4')}>
            {strategy}
          </A_Span>
          <A_Button mix={cn('th-5')} type="button-primary">Unfollow</A_Button>
        </A_TableRow>
      ))}
    </div>
  </A_Card>
)

O_AllSubscriptions.propTypes = {
  mix: T.string,
  children: T.any,
}

export default O_AllSubscriptions

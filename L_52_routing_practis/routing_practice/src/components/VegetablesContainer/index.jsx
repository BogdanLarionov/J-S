import React from 'react'
import Vegetable from '../Vegetable'
import { vegetables } from '../../data/vegetables'

export default function VegetablesContainer() {
  return (
    <div>
      {
        vegetables
          .sort((a, b) => a.price - b.price)
          .map(el => <Vegetable key={el.id} {...el} />)
      }
    </div>
  )
}

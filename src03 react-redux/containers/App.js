import React from 'react'
import { connect } from 'react-redux'

import Counter from '../components/counter'
import {increment, decrement} from '../redux/action-creators'

export default connect(
    state => ({count: state}),  // 指定向ui组件传递哪些一般属性  count
    {increment, decrement} // 指定向ui组件传递哪些函数属性  increment(){} / decrement(){}
  )(Counter)  // count
  
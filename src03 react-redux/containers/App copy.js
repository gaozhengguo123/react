import React from 'react'
import { connect } from 'react-redux'

import Counter from '../components/counter'
import {increment, decrement} from '../redux/action-creators'




const mapStateToprops = state => ({count: state})


const mapDispatchToProps = (dispatch) => ({ // 对象中所有方法都会作为函数属性传递给UI组件
  increment: number => dispatch(increment(number)),
  decrement: number => dispatch(decrement(number))
})

export default connect(
  mapStateToprops,  // 指定向ui组件传递哪些一般属性  count
  mapDispatchToProps // 指定向ui组件传递哪些函数属性  increment(){} / decrement(){}
)(Counter)  // count
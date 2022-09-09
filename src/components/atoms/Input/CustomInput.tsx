import { Input } from 'antd';
import React from 'react'

interface InputPropTypes {
    size?: 'small' | 'middle' | 'large',
    style?: object;
    type?: "",
}

const CustomInput = (props: InputPropTypes) => {
  return (
    <Input size={props.size} type={props.type} style={props.style} />
  )
}

export default CustomInput;
import React from 'react'
import '../css/text.styl'
export function TextBar({ style, ...props }) {
  return <p className="text30 textHeader1" style={ style} {...props} />
}
//return <p className="text30 textHeader1" style={{...style}}>{text}</p>
export function BtnText({ style, ...props }) {
  return <p className="text24 " style={ style} {...props} />
}

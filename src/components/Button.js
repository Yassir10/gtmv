import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({children, type, onClick, buttonStyle, buttonSize, hidden, redirect}) =>  {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
      <a className={`${hidden} btn-mobile center`}
         href={redirect ? redirect : "#"}>
          <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                  onClick={onClick}
                  type={type}>
              {children}
          </button>
      </a>
    );
}

export default Button
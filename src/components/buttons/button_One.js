import React from 'react'

function Button_one({ height, borderRadius, width, color, backgroundColor, fontWeight, title }) {
  
    const styles = {
        button: {
            height: height && height,
            minHeight: "auto",
            width: width && width,
            minWidth: !width && '170px',
            color,
            fontWeight: fontWeight && fontWeight,
            borderRadius: borderRadius ? borderRadius : "5px",
            border: 'none',
            background: `${backgroundColor}`,
            padding: '0px 5px',
            textAlign: 'center',
            fontSize: '20px',
            cursor: 'pointer',
        }
    }
  
    return (
        <button
        style={styles.button}
    >
        {title}
    </button>
  )
}

export default Button_one

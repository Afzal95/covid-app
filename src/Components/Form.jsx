import React, { Children } from 'react'
import styles from './Form.module.css'
function Form ({ onSubmit, children}){
    return(
       <form onSubmit={onSubmit} className={styles.myForm}>{children}</form>
    )
}
export default Form

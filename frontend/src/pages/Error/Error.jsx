import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorHeader}> Error 404 - page not found</div>
      <div className={styles.errorBody}>
        <Link to='/' className={styles.homeLink}>Go back to home</Link>
      </div>
    </div>
  )
}

export default Error

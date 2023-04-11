import React from 'react'
import styles from "../footer/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer_mainDiv}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/home'>
          Events
        </a>

    </div>
  )
}

export default Footer

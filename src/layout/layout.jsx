import {Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.css'

const Layout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Layout
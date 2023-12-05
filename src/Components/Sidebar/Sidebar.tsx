import styles from "./Sidebar.module.scss"
import {Link} from "react-router-dom"
import {UserIcon} from '../../assets/img/user.svg?react'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.profile}></div>
        <nav>
            <div className={styles.linksContainer}>
                <div className={styles.linkContainer}>
                    <Link className={styles.link}></Link>
                </div>
            </div>
        </nav>
    </aside>
  )
}
export default Sidebar

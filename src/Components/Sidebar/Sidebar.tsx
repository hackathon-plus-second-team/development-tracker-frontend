import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/img/user.svg?react';
import SuitcaseIcon from '../../assets/img/suitcase.svg?react';
import BookIcon from '../../assets/img/book.svg?react';
import PhoneIcon from '../../assets/img/phone.svg?react';
import ExitIcon from '../../assets/img/exit.svg?react';
import VacationIcon from '../../assets/img/vacation.svg?react';
import WokrshopIcon from '../../assets/img/workshop.svg?react';
import TrackerIcon from '../../assets/img/tracker.svg?react';
import FeedIcon from '../../assets/img/feed.svg?react';
import SettingsIcon from '../../assets/img/settings.svg?react';
import RigthArrowIcon from '../../assets/img/arrow.svg?react';
import HappyIcon from '../../assets/img/happy.svg?react';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>
                        <UserIcon />
                        <span>Светалана</span>
                    </div>

                    <div className={styles.userStatus}>
                        <span>Текущий этап</span>
                        <span>Акселерация</span>
                    </div>
                </div>
                <RigthArrowIcon className={styles.profileArrow} />
            </div>
            <nav className={styles.nav}>
                <div className={styles.linksContainer}>
                    <Link to="/" className={styles.link}>
                        <SuitcaseIcon />
                        <span>Вакансии</span>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <WokrshopIcon />
                        <span>Мастерская</span>
                    </Link>
                </div>
                <div className={styles.linksContainer}>
                    <Link to="/" className={styles.link}>
                        <BookIcon />
                        <span>Дневник</span>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <TrackerIcon />
                        <span>Развитие навыков</span>
                    </Link>
                </div>
                <div className={styles.linksContainer}>
                    <Link to="/" className={styles.link}>
                        <PhoneIcon />
                        <span>Контакты</span>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <FeedIcon />
                        <span>Лента</span>
                    </Link>
                </div>
            </nav>
            <button className={styles.button}>
                <span>Оффер принят</span>
                <HappyIcon />
            </button>
            <div>
                <div className={styles.linksContainer}>
                    <Link to="/" className={styles.link}>
                        <VacationIcon />
                        <span>Уйти в отпуск</span>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <SettingsIcon />
                        <span>Инфо профиля</span>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <ExitIcon />
                        <span>Выход</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;

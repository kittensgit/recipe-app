import { FC } from 'react';
import { Link } from 'react-router-dom';

import chefIcon from 'assets/chef.png';
import burgerMenuIcon from 'assets/menu.png';

import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_wrap}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <img src={chefIcon} alt="logo" />
                            <strong>Delecious</strong>
                        </div>
                    </Link>
                    <div className={styles.menu}>
                        <img src={burgerMenuIcon} alt="menu" />
                    </div>
                    <ul className={styles.category_list}>
                        <li>
                            <Link to={'/cuisine/chinese'}>Chinese</Link>
                        </li>
                        <li>
                            <Link to={'/cuisine/japanese'}>Japanese</Link>
                        </li>
                        <li>
                            <Link to={'/cuisine/korean'}>Korean</Link>
                        </li>
                        <li>
                            <Link to={'/cuisine/mexican'}>Mexican</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

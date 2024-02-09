import { FC } from 'react';

import { Link } from 'react-router-dom';

import chefIcon from 'assets/chef.png';

import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_wrap}>
                    <Link to="/">
                        <img src={chefIcon} alt="logo" />
                    </Link>
                    <ul className={styles.category_list}>
                        <li>
                            <Link to={'/cuisine/italian'}>Italian</Link>
                        </li>
                        <li>
                            <Link to={'/cuisine/japanese'}>Japanese</Link>
                        </li>
                        <li>
                            <Link to={'/cuisine/chinese'}>Chinese</Link>
                        </li>
                        <li>
                            <Link to={'/cuisine/france'}>France</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

import { FC } from 'react';

import chefIcon from 'assets/chef.png';
import searchIcon from 'assets/search.png';

import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_wrap}>
                    <a href="#">
                        <img src={chefIcon} alt="logo" />
                    </a>
                    <div className={styles.input_wrap}>
                        <img src={searchIcon} alt="search" />
                        <input placeholder="Enter a dish name" />
                    </div>
                    <ul className={styles.category_list}>
                        <li>
                            <a>Italian</a>
                        </li>
                        <li>
                            <a>Japanese</a>
                        </li>
                        <li>
                            <a>Chinese</a>
                        </li>
                        <li>
                            <a>France</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import chefIcon from 'assets/chef.png';
import burgerMenuIcon from 'assets/menu.png';
import closeIcon from 'assets/close.png';

import styles from './Header.module.css';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

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
                    <ul
                        className={
                            isOpen
                                ? [styles.category_list, styles.active].join(
                                      ' '
                                  )
                                : styles.category_list
                        }
                        onClick={handleCloseMenu}
                    >
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
                    <div onClick={handleMenu} className={styles.mobile_btn}>
                        {isOpen ? (
                            <img src={closeIcon} alt="close" />
                        ) : (
                            <img src={burgerMenuIcon} alt="menu" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

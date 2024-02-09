import { FC } from 'react';

import searchIcon from 'assets/search.png';

import styles from './Seacrh.module.css';

const Search: FC = () => {
    return (
        <div className={styles.search}>
            <div className={styles.input_wrap}>
                <img src={searchIcon} alt="search" />
                <input placeholder="Enter a dish name" />
            </div>
        </div>
    );
};

export default Search;

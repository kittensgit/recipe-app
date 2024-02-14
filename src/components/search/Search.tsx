import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Seacrh.module.css';

const Search: FC = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (search) {
                navigate(`/recipes/searched/${search}`);
                setSearch('');
            }
        }
    };

    return (
        <div className={styles.search}>
            <input
                value={search}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder="Enter a dish name"
            />
        </div>
    );
};

export default Search;

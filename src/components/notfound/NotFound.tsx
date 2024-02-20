import { FC } from 'react';

import notFoundIcon from 'assets/notfound.png';

import styles from './NotFound.module.css';

const NotFound: FC = () => {
    return (
        <div className={styles.notfound}>
            <img src={notFoundIcon} alt="notfound" />
            <p>Page not found</p>
        </div>
    );
};

export default NotFound;

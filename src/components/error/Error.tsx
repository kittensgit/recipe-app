import { FC } from 'react';

import errorIcon from 'assets/error.png';

import styles from './Error.module.css';

const Error: FC = () => {
    return (
        <div className={styles.error}>
            <img src={errorIcon} alt="error" />
            <p className={styles.caption}>An error has occurred</p>
        </div>
    );
};

export default Error;

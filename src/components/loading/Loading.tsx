import { FC } from 'react';

import styles from './Loading.module.css';

const Loading: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loading;

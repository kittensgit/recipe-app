import { FC } from 'react';

import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer_wrapp}>
                    <strong>Delecious</strong>
                </div>
            </div>
        </div>
    );
};

export default Footer;

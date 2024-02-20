import { FC } from 'react';

import instIcon from 'assets/inst.png';
import telegIcon from 'assets/tel.png';
import gmailIcon from 'assets/gmail.png';
import twitIcon from 'assets/twit.png';

import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer_wrapp}>
                    <strong>Delecious</strong>
                    <ul className={styles.socials}>
                        <li>
                            <a
                                href="https://web.telegram.org/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={telegIcon} alt="telega" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={instIcon} alt="inst" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={gmailIcon} alt="gmail" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={twitIcon} alt="twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

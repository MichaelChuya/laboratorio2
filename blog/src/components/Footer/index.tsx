import styles from './styles.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h4>Sitemap</h4>
                <ul>
                    <li>Home</li>
                    <li>Post</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Conéctate con nosotros</h4>
                <ul>
                    <li>Facebbok</li>
                    <li>Twitter</li>
                    <li>TikTok</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4></h4>
                <ul>
                    <img src="next.svg" alt="" />
                </ul>
            </div>
            <div className={styles.column}>
                <h4></h4>
                <ul>
                    <img src="vercel.svg" alt="" />
                </ul>
            </div>
            <div className={styles.column}>
                <h4></h4>
                <ul>
                    <img src="Seminario.jpeg" alt="" />
                </ul>
            </div>
        </footer>
    )
}
export default Footer;
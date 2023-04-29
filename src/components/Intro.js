import styles from './intro.module.css'
import pic from './pic.jpeg'

function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <h1>Hey there, 👋 I'm Nitish Kumar.</h1>
                <p>Software Engineer based out of Mumbai. I like to make digital experiences easier and simpler for people.</p>
                <div className={styles.buttons}>
                    <div className={styles.btn}>Check blog</div>
                    <div className={styles.btn}>About Me</div>
                </div>
            </div>
            <div className={styles.image}>
                <img src={pic} alt="picture" />
            </div>
        </div>
    )
}

export default Intro;
import styles from './Projects.module.css';

function Projects() {
    return (
        <div>
            <div className={styles.headings}>
                <h1>Documenting my journey through Projects.</h1>
                <p>Made with love ❤️</p>
            </div>
            <div className={styles.container}>
                <div className={styles.paper}>
                    <img className={styles.poster} src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg" />
                    <h1>Lorem ipsum dolor</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero velit ex tenetur repellat quas, quos quidem mollitia quam aliquam eos.</p><a className={styles.readBtn}>Read More </a>
                    <div className={styles.space}></div>
                </div>
                <div className={styles.paper}>
                    <img className={styles.poster} src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg" />
                    <h1>Lorem ipsum dolor</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero velit ex tenetur repellat quas, quos quidem mollitia quam aliquam eos.</p><a className={styles.readBtn}>Read More </a>
                    <div className={styles.space}></div>
                </div>
                <div className={styles.paper}>
                    <img className={styles.poster} src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg" />
                    <h1>Lorem ipsum dolor</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero velit ex tenetur repellat quas, quos quidem mollitia quam aliquam eos.</p><a className={styles.readBtn}>Read More </a>
                    <div className={styles.space}></div>
                </div>
                <div className={styles.paper}>
                    <img className={styles.poster} src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg" />
                    <h1>Lorem ipsum dolor</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero velit ex tenetur repellat quas, quos quidem mollitia quam aliquam eos.</p><a className={styles.readBtn}>Read More </a>
                    <div className={styles.space}></div>
                </div>
            </div>
        </div>

    );
}

export default Projects;

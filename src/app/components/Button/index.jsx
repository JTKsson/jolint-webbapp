'use client'
// import styles from ""

const ButtonComponent = () => {
    return (
        <>
        <div className={styles.button}>
            <a href="/page1">
                <button className={styles.inclusion}>
                    Why inclusion
                </button>
            </a>
            <a href="/page2">
                <button className={styles.works}>
                    How it works
                </button>
            </a>
            <a href="/page3">
                <button className={styles.consent}>
                    Consent form
                </button>
            </a>
        </div>
        </>
    );
};

export default ButtonComponent;
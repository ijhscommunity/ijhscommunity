// import Image from 'next/image'
import styles from "./page.module.css";

export const metadata = {
    description: "Cool stuff coming soon!",
    openGraph: {
        description: "Cool stuff coming soon!",
    },
};

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Cool stuff coming soon!</h1>
        </main>
    );
}

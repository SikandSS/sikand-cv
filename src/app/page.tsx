import Image from 'next/image'
import styles from './page.module.css'
import Search from '../../component/search';


export default function Home() {

  return (
    <main className={styles.container}>
      <div className={styles['menu-options'] + " " + "clickable"}>
        <div className={styles["option-align"] + " " + "clickable"}><span className={"material-symbols-outlined" }>apps</span></div>
        <div className={styles['profile-wrap'] + " " + "clickable"}><span className={styles['profile-text-align']}>S</span></div>
      </div>
      <div className={styles['logo-container']}>
        <div className={styles['logo']}>
          <Image
            src="/SIKAND-GOOGLE.png"
            alt='Picture of Logo.'
            width={400}
            height={220}
          />
        </div>
      </div>
      <Search/>
    </main>
  )
}

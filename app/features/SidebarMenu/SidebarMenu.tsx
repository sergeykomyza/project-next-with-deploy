import Image from 'next/image';
import styles from './sidebarMenu.module.scss';
import Magnet from '@/app/components/Magnet/Magnet';
import Link from 'next/link';
import Noise from '@/app/components/Noise/Noise';

export const SidebarMenu: React.FC = () => {
  return (
    <header className={styles.sidebar}>
      <Noise
        patternSize={250}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <Magnet padding={50} disabled={false} magnetStrength={10}>
        <Link href="/">
          <Image className={styles.logo} src="/img/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </Magnet>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.menuLink} href="/">Главная</Link>
        </li>
        <li>
          <Link className={styles.menuLink} href="/about">О нас</Link>
        </li>
      </ul>
    </header>
  )
}
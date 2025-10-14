'use client';
import { useRouter } from 'next/navigation';
import styles from './Header2.module.css';
import PlayerInfo from './PlayerInfo';

export default function Header2() {
  const router = useRouter();

  const back = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/logo.jpg" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav className={styles.links}>
        <a href="/" onClick={back} className={styles.link}>Home</a>
        <a href="#lobby" className={styles.link}>Lobby</a>
        <a href="#about" className={styles.link}>About</a>
      </nav>

      {/* Player Info */}
      <div className={styles.player}>
        <PlayerInfo />
      </div>
    </div>
  );
}

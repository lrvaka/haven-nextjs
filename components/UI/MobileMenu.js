import MobileMenuImage from "../../public/images/Mobile-Menu.svg";
import Image from "next/image";
import styles from './MobileMenu.module.css'

export default function MobileMenu() {
  return (
    <div className={styles.mobileMenuContainer}>
      <Image height={90} width={180} src={MobileMenuImage} alt="mobile menu" />
    </div>
  );
}

import styles from "./Sidebar.module.css";

import bgProfile from "../assets/bg-profile.png";
import avatar from "../assets/avatar-profile.png";

import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={bgProfile} alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Nicolas-Moises.png" />
        <strong>Nicolas Moises</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

import type { CSSProperties } from "react";
import { skillGroups } from "@/lib/data";
import { getTechIcon, TechIcon } from "./TechIcon";
import styles from "./OrbitSkills.module.css";

const featuredSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Redux Toolkit",
  "Tailwind CSS",
  "GitHub",
  "CI/CD",
  "GitHub Actions",
  "Docker",
  "Jest",
  "Playwright",
  "Linux",
  "Material UI",
  "Bootstrap",
  "Next.js",
  "Amazon EC2",
  "TypeScript",
  "MySQL",
  "React Router",
  "RESTful API design",
  "WebSocket",
  "JWT authentication",
  "Mongoose",
  "Git",
];

const availableSkills = new Set(skillGroups.flatMap((group) => group.skills));
const orbitalSkills = featuredSkills.filter((skill) => availableSkills.has(skill));
const orbitCount = 2;
const orbits = Array.from({ length: orbitCount }, (_, orbitIndex) =>
  orbitalSkills.filter((_, index) => index % orbitCount === orbitIndex),
);

export default function OrbitSkills() {
  return (
    <div className={styles.stage} role="img" aria-label={`Animated technology constellation: ${orbitalSkills.join(", ")}`}>
      <span className={styles.halo} aria-hidden />
      {orbits.map((orbitSkills, orbitIndex) => {
        const orbitClass = styles[`orbit--${orbitIndex + 1}`];
        return (
          <div key={orbitIndex} className={`${styles.orbit} ${orbitClass}`}>
            <span className={`${styles.ring} ${styles[`ring--${orbitIndex + 1}`]}`} aria-hidden />
            {orbitSkills.map((name, index) => {
              const angle = (index / orbitSkills.length) * 360;
              const { color } = getTechIcon(name);
              return (
                <span
                  key={name}
                  className={styles["skill-position"]}
                  style={{ "--skill-angle": `${angle}deg`, "--skill-color": color } as CSSProperties}
                  title={name}
                  aria-label={name}
                >
                  <span className={styles.skill}>
                    <TechIcon name={name} className={styles["skill-icon"]} />
                  </span>
                </span>
              );
            })}
          </div>
        );
      })}
      <div className={styles.panel} aria-hidden>
        <div className={styles["panel-bar"]}>
          <span className={styles["window-dots"]}><i /><i /><i /></span>
          <span className={styles["panel-tab"]}>portfolio.tsx</span>
          <span className={styles["panel-status"]}>LIVE</span>
        </div>
        <div className={styles["panel-code"]}>
          <p><span className={styles["code-purple"]}>const</span> developer = {"{"}</p>
          <p className={styles.indent}><span className={styles["code-cyan"]}>build</span>: <span className={styles["code-green"]}>"full-stack apps"</span>,</p>
          <p className={styles.indent}><span className={styles["code-cyan"]}>focus</span>: [</p>
          <p className={`${styles.indent} ${styles["indent--more"]}`}><span className={styles["code-green"]}>"great UX"</span>,</p>
          <p className={`${styles.indent} ${styles["indent--more"]}`}><span className={styles["code-green"]}>"reliable APIs"</span></p>
          <p className={styles.indent}>],</p>
          <p className={styles.indent}><span className={styles["code-cyan"]}>ship</span>: <span className={styles["code-orange"]}>true</span></p>
          <p>{"};"}</p>
        </div>
        <div className={styles["panel-footer"]}>
          <span><b /> DESIGN</span><span><b /> BUILD</span><span><b /> SHIP</span>
        </div>
      </div>
      <span className={styles.sparkle} aria-hidden />
      <span className={`${styles.sparkle} ${styles["sparkle--two"]}`} aria-hidden />
    </div>
  );
}

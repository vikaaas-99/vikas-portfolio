import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiVercel,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiLangchain,
  SiTemporal,
  SiDjango,
  SiFlutter,
  SiFirebase,
  SiNginx,
  SiCelery,
  SiRedis,
  SiGooglecloud,
  SiOpenai,
  SiGooglegemini,
  SiPandas,
} from "react-icons/si";

const techRow1 = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Celery", Icon: SiCelery, color: "#37814A" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Temporal", Icon: SiTemporal, color: "#FFFFFF" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Pandas", Icon: SiPandas, color: "#150458" },
];

const techRow2 = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Flutter", Icon: SiFlutter, color: "#027DFD" },
];

const techRow3 = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
];

const techRow4 = [
  { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { name: "OpenAI", Icon: SiOpenai, color: "#10A37F" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E75FF" },
];

function TechItem({
  name,
  Icon,
  color,
}: {
  name: string;
  Icon: typeof SiReact;
  color: string;
}) {
  return (
    <div className="techstack-item">
      <Icon className="techstack-item-icon" style={{ color }} aria-hidden />
      <span className="techstack-item-name">{name}</span>
    </div>
  );
}

const TechStack = () => {
  const rows = [techRow1, techRow2, techRow3, techRow4];

  return (
    <section className="techstack" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading">Tech Stack</h2>

      <div className="techstack-marquee-wrap">
        {rows.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            speed={35 + rowIndex * 3}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            gradient={true}
            gradientColor="#0b080c"
            gradientWidth={80}
            className="techstack-marquee"
          >
            {row.map((tech, i) => (
              <TechItem
                key={`${tech.name}-${rowIndex}-${i}`}
                name={tech.name}
                Icon={tech.Icon}
                color={tech.color}
              />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

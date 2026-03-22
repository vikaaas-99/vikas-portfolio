import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineer focused on AI-driven backend systems and scalable web
          products. I build document intelligence and RAG applications using FastAPI,
          LangChain/LangGraph, and cloud-native AWS architectures, while shipping
          reliable frontend experiences with React.
        </p>
      </div>
    </div>
  );
};

export default About;

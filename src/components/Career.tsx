import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Privue</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Building cloud-native AI data platforms for enterprise clients using
              FastAPI, React, and AWS. Delivered Docvue and RAG-based financial
              document intelligence workflows with LangChain, LangGraph, Temporal,
              and serverless orchestration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Software Developer</h4>
                <h5>Jina Code Systems</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and optimized import-export systems across web and mobile,
              shipped recommendation and bidding engines, and automated workflows
              with Celery, WhatsApp, and Zapier while deploying on AWS with CI/CD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Helppr.ai</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built a self-study platform used by 12,000+ learners with quiz
              generation, notification systems, and high-availability deployment.
              Improved API performance by 30% and scaled backend operations on AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

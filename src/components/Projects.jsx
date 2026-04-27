export default function Projects() {
    return (
      <section id="projects" className="bg-light p-5">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5>Project One</h5>
                  <p>React + Node App</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5>Project Two</h5>
                  <p>Banking System</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5>Project Three</h5>
                  <p>Portfolio Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
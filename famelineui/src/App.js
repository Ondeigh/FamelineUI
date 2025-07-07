import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Background Effects */}
      <div className="background-effects">
        <div className="gradient-effect-1"></div>
        <div className="gradient-effect-2"></div>
        <div className="blur-effect-1"></div>
        <div className="blur-effect-2"></div>
        <div className="blur-effect-3"></div>
        <div className="blur-effect-4"></div>
      </div>

      {/* Header Navigation */}
      <header className="header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8984015fab33edf98c290db6ccb697a15121d3a4?width=3840"
          alt="Header Background"
          className="header-bg"
        />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Performance Louvers.</h1>
          <h2 className="hero-subtitle">More than a beautiful facade.</h2>
          <p className="hero-description">
            Our efficient performer louvers can improve airflow to building
            systems while protecting them against rain and resolve noise
            propagation.
          </p>
          <button className="cta-button">Find your louver</button>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7186648f9ec4f325d2755b7c0a4c9224775db965?width=1638"
            alt="Performance Louver"
          />
        </div>
      </section>

      {/* Why Performance Louvers Section */}
      <section className="why-section">
        <h2 className="section-title">
          Why <span className="highlight-green">Performance Louvers</span>?
        </h2>
        <p className="section-description">
          Performance louvers serve multiple functions: regulating ventilation,
          preventing rain ingress, controlling natural light, and managing
          acoustic levels.
        </p>
        <div className="louver-showcase">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa770c4db0af9e99604df3c77b3ff17597a73b83?width=918"
            alt="Louver Example"
          />
        </div>
        <div className="performance-indicators">
          <div className="indicator-group">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </section>

      {/* About Luva Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">
            About <span className="highlight-green">Luva</span>
          </h2>
          <p className="about-description">
            The challenge lies in specification. Each project demands a unique
            balance influenced by factors ranging from local climate conditions
            to specific building requirements.
            <br />
            <br />
            Our AI-powered optimization engine,{" "}
            <span className="highlight-green">Luva</span> simplifies this
            complex specification process. By analyzing your project parameters
            and aesthetic preferences,{" "}
            <span className="highlight-green">Luva</span> computes the best
            louver configuration for you from our comprehensive product range.
            This AI-driven approach ensures architects receive precise,
            performance-validated recommendations tailored to their specific
            application.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/440ee9be5668b7f35b41358493dbea6419d8f93e?width=1534"
            alt="Luva AI System"
          />
        </div>
      </section>

      {/* Our Performance Louvers Section */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="highlight-green">Performance Louvers</span>
          </h2>
          <div className="filter-button">
            <div className="filter-line"></div>
            <div className="filter-line"></div>
            <div className="filter-line"></div>
          </div>
        </div>

        <div className="acoustic-louvers">
          <div className="louver-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd2faf1d2f107bede38b2d23a17d2ba6cea0b2ad?width=518"
              alt="AC150f"
            />
          </div>
          <div className="louver-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73971a6d915952ce74614e0b4027de4b583f839e?width=542"
              alt="AC300f"
            />
          </div>
          <div className="louver-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2454ed8fd5f3ac8b971c5adae3a5e9cab9512331?width=479"
              alt="PL-2065V"
            />
          </div>
        </div>

        <div className="product-grid">
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0514373b24ce1c61af688b4a38e22cf8091193c7?width=494"
              alt="PL-1050 CB"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/415896fafaa77ceeb2325c338c3e192eea8dd884?width=526"
              alt="PL-2050(CB)"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2613c3501f13da644c38cca8043eb65da21a8caf?width=526"
              alt="PL-3050(CB)"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a9559c6214c914570089c97bbdba660d8a00a37?width=486"
              alt="PL-1075(CB)"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2250fa68f06c06d066e554da856125fda14df62e?width=584"
              alt="PL-2075(STB)"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92421e0570432048a7516d942e5ce1ea0744b1a7?width=534"
              alt="PL-3075(CB)"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f982036d3b57d95a338aa51a58c42143597c2d6?width=414"
              alt="PL-2150V"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/097952fc32f275856fd6feac178549b089f8949f?width=508"
              alt="PL-2170f"
            />
          </div>
          <div className="product-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ead301e77818f83a51dfa2302c1b90d54cf2d683?width=484"
              alt="PL-2250 V"
            />
          </div>
          <div className="product-item featured">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0514373b24ce1c61af688b4a38e22cf8091193c7?width=494"
              alt="PL-1050"
            />
            <div className="product-info">
              <h3>PL-1050</h3>
              <p>Horizontal Single Bank Louver</p>
              <div className="performance-rating">
                <span>Airflow</span>
                <span className="rating">Excellent</span>
              </div>
            </div>
          </div>
          <div className="product-item small">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a55d1691ac0fe92e1d2d43af86aacdc3410ed3?width=322"
              alt="PL-2250"
            />
          </div>
          <div className="product-item small">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a55d1691ac0fe92e1d2d43af86aacdc3410ed3?width=322"
              alt="PL-2250"
            />
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="projects-section">
        <h2 className="section-title">
          Explore <span className="highlight-green">Performance Louvers</span>
          <br />
          in Recent Projects
        </h2>

        <div className="project-showcase">
          <div className="project-images">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39b3166384507122bc02ca30bc127210105786b7?width=1786"
              alt="Project Image 1"
              className="main-image"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/563f9473fd942b19f237349aa2c7dc17c1de0298?width=1468"
              alt="Project Image 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32d55209dde12e56728b5bea9f3a5e41a153f740?width=1468"
              alt="Project Image 3"
            />
          </div>

          <div className="project-info">
            <div className="location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac84a0f21581a5f03abc37f57aed21260c464b8b?width=66"
                alt="Location"
              />
              <span>Kansas City, Utopia</span>
            </div>
            <h3>UPT02 House</h3>
            <p>
              Installation of PL-3070 and PL-3070V double bank louvers for rain
              defense and airflow control in data centre.
            </p>

            <div className="product-highlight">
              <span className="product-name">PL-3070</span>
              <span className="product-type">
                Double bank louver with mullion
              </span>
              <div className="client-info">
                <strong>Client/Company</strong>
                <span>BitConnectX</span>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator long"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="section-title">
          Ready to find the perfect{" "}
          <span className="highlight-green">Performance Louver</span>?
        </h2>
        <button className="cta-button">Find your louver</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7075d0c3fa684185ae5e35d52166ec18ba9d9aa6?width=830"
            alt="Fameline Logo"
            className="footer-logo"
          />
          <div className="footer-contact">
            <p>Get in touch with us.</p>
            <div className="social-links">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e667446604a050db1ab981381031e3d22274ea81?width=154"
                alt="Social 1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf68d1164868e70a3496347edbd7665e8d2d7e5?width=160"
                alt="Social 2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacfb8a851f8001ba4fd2979928f851de5d95343?width=164"
                alt="Social 3"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5abd7fc86c718e5862a2c28fd758efd1ac0b0adf?width=162"
                alt="Social 4"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 Fameline APSG Pte Ltd</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

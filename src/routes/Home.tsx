import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <header className="flex justify-between">
        <Link to="/">Medium</Link>
        <nav>
          <button>Get started</button>
        </nav>
      </header>
      <hr />
      <section>
        <h1>Human stories &amp; ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <button>Start reading</button>
      </section>
      <footer>
        <Link to="#">About</Link>
        <Link to="#">Help</Link>
        <Link to="#">Terms</Link>
        <Link to="#">Privacy</Link>
      </footer>
    </div>
  );
};

export default Home;

import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh text-black">
        <header>
          <div className="flex justify-between items-center p-5 max-w-7xl md:px-12 lg:mx-auto">
            <Link to="/" className="font-lora font-bold text-3xl">
              Easium
            </Link>
            <nav className="flex items-center gap-3">
              <Link to="sign-in" className="max-sm:hidden mr-3">
                Sign in
              </Link>
              <Link to="sign-up" className="btn">
                Get started
              </Link>
            </nav>
          </div>
          <hr />
        </header>
        <section className="flex flex-col justify-center items-start px-5 pt-16 gap-8  md:px-12 max-w-7xl lg:mx-auto">
          <h1 className="font-lora text-7xl sm:mr-64 md:mr-96 md:text-8xl">
            Human stories &amp; ideas
          </h1>
          <p className="text-2xl">
            A place to read, write, and deepen your understanding
          </p>
          <Link
            to="sign-up"
            className="btn px-11 text-lg  hover:opacity-80 transition-all"
          >
            Start reading
          </Link>
        </section>
        <footer className="bg-black text-white text-xs flex gap-4 py-6.5 px-5 md:px-12 lg:justify-center">
          <Link to="#">About</Link>
          <Link to="#">Help</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
        </footer>
      </div>
      <Outlet />
    </>
  );
};

export default Home;

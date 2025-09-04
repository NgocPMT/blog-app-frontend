import { Link } from "react-router";
import Modal from "../components/Modal";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <button onClick={openModal} className="btn">
                Get started
              </button>
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
          <button
            onClick={openModal}
            className="btn px-11 text-lg  hover:opacity-80 transition-all"
          >
            Start reading
          </button>
        </section>
        <footer className="bg-black text-white text-xs flex gap-4 py-6.5 px-5 md:px-12 lg:justify-center">
          <Link to="#">About</Link>
          <Link to="#">Help</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
        </footer>
      </div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="max-sm:min-w-lvw max-md:min-h-lvh md:p-12 md:max-w-[40rem] flex flex-col justify-center items-center gap-6 md:gap-10">
          <h2 className="font-lora text-3xl">Join Medium.</h2>
          <div className="flex flex-col gap-4 ">
            <button className="btn bg-white text-black border px-8 md:px-16 md:py-2.5 relative">
              <FcGoogle className="h-1/2 w-auto absolute left-2 top-1/4" />
              <p>Sign up with Google</p>
            </button>
            <button className="btn bg-white text-black border px-8 md:px-16 md:py-2.5 relative">
              <FaFacebook className="h-1/2 w-auto absolute left-2 top-1/4 text-blue-600" />
              <p>Sign up with Facebook</p>
            </button>
            <button className="btn bg-white text-black border px-8 md:px-16 md:py-2.5 relative">
              <MdAccountCircle className="h-1/2 w-auto absolute left-2 top-1/4 text-black" />
              <p>Sign up with account</p>
            </button>
          </div>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="sign-in" className="underline">
              Sign in
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500 -mt-4">
            Click “Sign up” to agree to Medium’s{" "}
            <Link to="" className="underline">
              Terms of Service
            </Link>{" "}
            and acknowledge that Medium’s{" "}
            <Link to="" className="underline">
              Privacy Policy
            </Link>{" "}
            applies to you.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Home;

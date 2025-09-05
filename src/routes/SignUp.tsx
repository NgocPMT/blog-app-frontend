import Modal from "../components/Modal";
import SignUpForm from "../components/SignUpForm";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Modal onClose={handleClose}>
      <SignUpForm />
    </Modal>
  );
};

export default SignUp;

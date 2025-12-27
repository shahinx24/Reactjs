import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login"); // redirect to login
  }

  return (
    <>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" /><br />
        <input placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

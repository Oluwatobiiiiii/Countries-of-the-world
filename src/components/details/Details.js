import { useNavigate } from "react-router-dom";

export default function Details({ detail }) {
  const navigate = useNavigate();
  return (
    <div>
      {/* // to the back */}
      <button onClick={() => navigate(-1)}>back</button>
      <h1>Hello from {detail}</h1>
    </div>
  );
}

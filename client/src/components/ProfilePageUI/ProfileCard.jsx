import { Link } from "react-router-dom";

export default function ProfileCard({option}) {
  return (
    <Link className="profile-card" to={`/${option.name}`}>
      {option.name}
    </Link>
  );
}
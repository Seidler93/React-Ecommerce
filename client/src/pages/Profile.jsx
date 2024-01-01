import ProfileCard from "../components/ProfilePageUI/profileCard";

export default function Profile() {
  const options = [
    {name: 'Orders'},
    {name: 'Wishlists'},
  ]

  return (
    <div className="d-flex flex-wrap hp">
      {options.map((option) => <ProfileCard option={option} />)}
    </div>
  );
}
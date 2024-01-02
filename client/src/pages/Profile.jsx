import ProfileCard from "../components/ProfilePageUI/ProfileCard";

export default function Profile() {
  const options = [
    {name: 'Orders'},
    {name: 'Wishlists'},
  ]

  return (
    <div className="d-flex flex-wrap hp">
      {options.map((option, index) => <ProfileCard key={index} option={option} />)}
    </div>
  );
}
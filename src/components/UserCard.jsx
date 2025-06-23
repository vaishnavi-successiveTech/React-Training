// components/UserCard.js
const UserCard=(props)=>{
  return (
    <div className="cardStyle">
      <img src={props.avatarUrl} alt="User avatar" className="imageStyle" />
      <div className="containerStyle">
        <h4><b>Name: {props.name}</b></h4>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}
export default  UserCard;

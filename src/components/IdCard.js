function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div className="idCard-border">
        <img src={picture} alt="profile pic" />
        <div>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Birth: {birth}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;
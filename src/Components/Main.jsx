import "./Main.css";
const Main = (user) => {
  const { location, name, email, phone, picture, dob, registered } = user;
  return (
    <div className="card ">
      <div className="card-header">
        <img
          src={picture?.large}
          className="card-img-top rounded-circle"
          alt="Random user"
        />
        <p className="fs-2">
          {name?.title}.{name?.first}
          <span className="ms-2">{name?.last}</span>
        </p>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">+{phone}</li>
          <li className="list-group-item">
            {location?.city},{location?.country}
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Age : {dob?.age}</li>
          <li className="list-group-item">
            Register Date : {new Date(registered?.date).toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

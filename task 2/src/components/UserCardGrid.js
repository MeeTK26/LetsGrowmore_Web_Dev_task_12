// UserCardGrid component
const UserCardGrid = ({ users }) => {
    return (
      <div className="user-card-grid-container">
        {users.map((user) => (
          <div className="user-card-container" key={user.id}>
            <img className="user-card-image" src={user.avatar} alt={user.first_name} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default UserCardGrid;

import { useState } from "react";

const UserProfileForm = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "",
      email: "",
      age: "",
      address: {
        street: "",
        city: "",
        country: "",
      },
    },
  ]);

  const handleChange = (userId, e) => {
    const { name, value } = e.target;

    // setUsers((prev) => prev.map);
  };

  const handleAddressChange = (userId, e) => {};

  const addNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: "",
      email: "",
      age: "",
      address: {
        street: "",
        city: "",
        country: "",
      },
    };
    setUsers((prev) => [...prev, newUser]);
    console.log(users);
  };

  const removeUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //nilai plus jika dibuat ui list namun sampai data tampil di console sudah bagus
    console.log("Submitted users:", users);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-blue-100 mt-10 p-4 rounded-md"
    >
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>User ID: {user.id}</h3>
          <div className="mt-3">
            <label>Name:</label>
            <input
              className="px-4 py-1 border border-gray-400 rounded-sm w-full"
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(user.id, e)}
            />
          </div>
          <div className="mt-3">
            <label>Email:</label>
            <input
              className="px-4 py-1 border border-gray-400 rounded-sm w-full"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(user.id, e)}
            />
          </div>
          <div className="mt-3">
            <label>Age:</label>
            <input
              className="px-4 py-1 border border-gray-400 rounded-sm w-full"
              type="number"
              name="age"
              value={user.age}
              onChange={(e) => handleChange(user.id, e)}
            />
          </div>

          <div
            className="mt-4"
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <h4>Address</h4>

            <div className="mt-3">
              <label>Street:</label>
              <input
                className="px-4 py-1 border border-gray-400 rounded-sm w-full"
                type="text"
                name="street"
                value={user.address.street}
                onChange={(e) => handleAddressChange(user.id, e)}
              />
            </div>
            <div className="mt-3">
              <label>City:</label>
              <input
                className="px-4 py-1 border border-gray-400 rounded-sm w-full"
                type="text"
                name="city"
                value={user.address.city}
                onChange={(e) => handleAddressChange(user.id, e)}
              />
            </div>
            <div className="mt-3">
              <label>Country:</label>
              <input
                className="px-4 py-1 border border-gray-400 rounded-sm w-full"
                type="text"
                name="country"
                value={user.address.country}
                onChange={(e) => handleAddressChange(user.id, e)}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => removeUser(user.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md w-full"
          >
            Remove User
          </button>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          className="flex-1 text-white text-center rounded-md bg-yellow-400 px-4 py-2"
          type="button"
          onClick={addNewUser}
        >
          Add New User
        </button>
        <button
          className="flex-1 text-white text-center rounded-md bg-green-600 px-4 py-2"
          type="submit"
        >
          Save All Users
        </button>
      </div>
    </form>
  );
};

export default UserProfileForm;

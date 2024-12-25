import React from "react";

const ProductInfo = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 28,
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 24,
      isActive: false,
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      age: 32,
      isActive: true,
    },
  ];
  return (
    <div>
      {users.map(({ id, name, email, age }) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{email}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductInfo;

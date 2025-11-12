import { useState } from "react";

function UpObject() {
  const [data, setData] = useState({
    name: "Emma Johnson",
    address: {
      city: "New York",
      country: "USA",
    },
  });

  const handleName = (val) => {
    data.name = val;
    setData({ ...data });
  };

  const handleCity = (city) => {
    data.address.city = city;
    setData({ ...data, address: { ...data.address } });
  };

  const handleCountry = (country) => {
    data.address.country = country;
    setData({ ...data, address: { ...data.address } });
  };
  return (
    <>
      <h1>Update Object in react</h1>
      <input
        type="text"
        onChange={(event) => handleName(event.target.value)}
        placeholder="enter name"
      />
      <hr />
      <input
        type="text"
        onChange={(event) => handleCity(event.target.value)}
        placeholder="enter city"
      />
      <hr />
      <input
        type="text"
        onChange={(event) => handleCountry(event.target.value)}
        placeholder="enter country"
      />
      <h2>Name:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
    </>
  );
}
export default UpObject;

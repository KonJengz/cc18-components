import { useState } from "react";

export default function ProductForm() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const category = [
    "electronics",
    "jewelery",
    "men clothing",
    "women clothing",
  ];

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // setInput({ ...input, [e.target.name]: e.target.value})
    // setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      for (let key in input) {
        if (!input[key]) {
          return console.log("please check");
        }
      }

      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ ...input, price: +input.price }),
      });

      const jsonRes = await res.json();

      console.log("jsonRes", jsonRes);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <p className="text-2xl border-b-2 mt-4">Product form</p>
      <form
        className="flex flex-col gap-3 p-4 w-3/4 border mx-auto mt-4"
        onSubmit={hdlSubmit}
      >
        <label className="flex">
          Title :
          <input
            className="ms-3 border flex-grow"
            name="title"
            value={input.title}
            onChange={hdlChange}
          />
        </label>

        <label className="flex">
          Description :
          <input
            className="ms-3 border flex-grow"
            name="description"
            value={input.description}
            onChange={hdlChange}
          />
        </label>

        <label className="flex">
          Price :
          <input
            name="price"
            className="ms-3 border flex-grow"
            value={input.price}
            onChange={hdlChange}
          />
        </label>

        <label className="flex">
          Category :
          <select
            className="ms-3 border flex-grow"
            name="category"
            value={input.category}
            onChange={hdlChange}
          >
            <option value="">Please select..</option>
            {category.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </label>
        <button className="bg-pink-400">Add this data</button>
      </form>
    </>
  );
}

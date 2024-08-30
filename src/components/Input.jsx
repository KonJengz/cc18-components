export default function Input({
  handelChange,
  valueInput,
  placeholder,
  typeInput,
  nameInput,
  error,
}) {
  console.log("nameInput", nameInput);
  return (
    <>
      <input
        className={`bg-gray-200 py-1 px-2 rounded-md outline-none border ${
          error && "border-red-400"
        } `}
        value={valueInput}
        name={nameInput}
        onChange={handelChange}
        type={typeInput}
        placeholder={placeholder}
      />
      {error && <p className="text-red-400 text-[10px]">{error}</p>}
    </>
  );
}

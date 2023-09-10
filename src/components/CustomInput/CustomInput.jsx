export default function CustomInput({ placeholder, max, min, onChange, value, error, className, autoComplete }) {
  return (
    <div className={`relative ${className}`}>
      <input
        placeholder={placeholder}
        max={max}
        min={min}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
        type="text"
        id={autoComplete}
        className="w-full focus:outline-none p-2 rounded-md border-[2px] border-black"
      ></input>
      <p className="absolute text-xs text-red-500 font-bold">{error}</p>
    </div>
  );
}

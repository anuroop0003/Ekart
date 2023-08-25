export default function CustomButton({ disabled, className, placeholder, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={disabled}
      className={`${className} w-full justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2`}
    >
      {placeholder}
    </button>
  );
}

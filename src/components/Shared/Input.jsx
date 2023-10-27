export default function Input({
  labelText,
  type,
  placeholder,
  name,
  change,
  register,
  error,
}) {
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="flex mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          {labelText}
        </label>
        <input
          type={type || "text"}
          {...(register && { ...register(name) })}
          name={name}
          className="bg-gray-50 border border-primary-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={change && change}
        />
      </div>
      <span className="text-red-600">{error ? error : "\u00A0"}</span>
    </>
  );
}

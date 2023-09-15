// eslint-disable-next-line react/prop-types
export default function Title({ text }) {
  return (
    <div className="flex flex-col  items-center  mb-5 items-center ">
      <h1 className="text-4xl font-bold text-gray-600 text-center pb-5">{text}</h1>
      <div className="flex justify-center   w-32 h-px bg-gray-300 bottom-px left-1/2">
        <div className="w-10 h-0.5 bg-blue-600  -translate-y-1/3"></div>
      </div>
    </div>
  )
}



export default function Input({label, id, placeholder, ...props}) {
  return (
    <p className=" ">
      <input placeholder={placeholder} className=" px-5 py-3 bg-white rounded-3xl w-[200px] md:w-[320px]" id={id} name={id} required {...props} />
    </p>
  )
}

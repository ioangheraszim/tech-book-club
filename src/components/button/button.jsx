export default function Button({ text, children, className }) {
  return (
    <button className={className}>
      {text} {children}
    </button>
  )
}

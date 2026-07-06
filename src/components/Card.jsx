export default function Card({ as: Tag = 'div', className = '', hover = false, children, ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-line bg-surface ${
        hover ? 'transition-[border-color,transform,background-color] duration-300 hover:border-accent/50 hover:bg-surface-2' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

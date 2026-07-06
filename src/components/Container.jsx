const SIZES = {
  default: 'max-w-7xl',
  prose: 'max-w-4xl',
  wide: 'max-w-[90rem]',
  full: 'max-w-none',
}

export default function Container({ as: Tag = 'div', size = 'default', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-8 ${SIZES[size]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

import Container from './Container'

export default function Section({
  as: Tag = 'section',
  id,
  className = '',
  container = true,
  containerSize = 'default',
  children,
  ...props
}) {
  return (
    <Tag id={id} className={`relative scroll-mt-24 py-20 md:py-32 ${className}`} {...props}>
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </Tag>
  )
}

type SectionHeadingProps ={
  children: React.ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>
  )
}
export default SectionHeading
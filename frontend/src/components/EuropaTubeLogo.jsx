/* eslint-disable react/prop-types */
export const EuropaTubeLogo = ({
    fontSize = 'text-lg',
    fontColor = 'text-purple-500',
    className = '',
    ...props
}) => {
  return (
    <span className={`${fontColor} ${fontSize} tracking-tighter ${className}`} {...props}>Europa<span className="font-oswald font-medium tracking-wide">Tube</span></span>
  )
}

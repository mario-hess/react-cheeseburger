interface ComponentProps {
  isToggled: React.ComponentState
  onClick?: React.MouseEventHandler<SVGElement> | undefined
  color?: string
  width?: number
  height?: number
  rounded?: boolean
  strokeWidth?: number
  slick?: boolean
  reverse?: boolean
  rotate?: number
  innerlineSpeed?: number
  outerLineSpeed?: number
  animationType?: string
}

const Cheeseburger = ({
  isToggled = false,
  onClick,
  color = 'darkslategrey',
  width = 100,
  height = 100,
  rounded = false,
  strokeWidth = 1,
  slick = false,
  reverse = false,
  rotate = 0,
  innerlineSpeed = 350,
  outerLineSpeed = 500,
  animationType = 'cubic-bezier(0.4, 0.45, 0.5, 1)',
}: ComponentProps) => {
  const transition = `${outerLineSpeed}ms ${animationType}`

  const wrapper: React.CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    touchAction: 'manipulation',
    userSelect: 'none',
    msUserSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
  }

  const centerPath: React.CSSProperties = {
    transition:
      `stroke-dasharray ${transition},` +
      `stroke-dashoffset ${innerlineSpeed}ms ${animationType}`,
    fill: 'none',
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: rounded ? 'round' : 'butt',
    strokeDasharray: isToggled ? '10 24' : '10 24',
    strokeDashoffset: isToggled ? (reverse ? 10 : -10) : 0,
  }

  const outerPath: React.CSSProperties = {
    transition:
      `stroke-dasharray ${transition},` +
      `stroke-dashoffset ${transition}`,
    fill: 'none',
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: rounded ? 'round' : 'butt',
    strokeDasharray: isToggled ? '7 28' : '10 27',
    strokeDashoffset: isToggled ? '-27' : 0,
  }

  return (
    <svg
      style={wrapper}
      width={width}
      height={height}
      viewBox={`${isToggled ? -5 : -4.5} 0 20 9.8`}
      onClick={onClick}
    >
      <path
        style={outerPath}
        fill={color}
        d='m 0.5,8.5 h 10 c 1.666667,0 1.820503,-1.4177976 2.5,-3.99644 0.699157,-2.6532508 0.698686,-3.87285249 0.164006,-4.66444661 C 12.621455,-0.91395689 11.176817,-0.99843497 10,0.05017631 L 1,9.0501763'
      />

      <path
        style={centerPath}
        fill={color}
        d={`m ${slick ? 3 : 0.5},5 h 10`}
      />

      <path
        style={outerPath}
        d='m 0.5,1.5 h 10 c 1.666667,0 1.820503,1.4177973 2.5,3.9964398 0.699157,2.6532508 0.698686,3.8728525 0.164006,4.6644462 C 12.621455,10.964134 11.176817,11.048613 10,9.9999998 L 1,1'
        fill={color}
      />
    </svg>
  )
}

export default Cheeseburger

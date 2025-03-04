# react-cheeseburger

A simple, dependency-free hamburger menu component for React that leverages smooth CSS animations for a seamless user experience. This component does not glitch when clicked rapidly in succession, as it smoothly transitions back and forth during animation.

<div align="center">
<a href="https://github.com/mario-hess/react-cheeseburger">
<img src="https://i.imgur.com/1OQZyYQ.gif" alt="Logo" width="460">
</a>
</div>

## Features

- **CSS-Based Animations**: The animations are implemented entirely using CSS, providing smooth transitions without the need for additional JavaScript-based animation libraries.
- **Highly Configurable**: Customize the appearance and animation behavior with props, including color, size, stroke width, animation speed and more.
- **No Dependencies**: No external libraries are required to use this component.

## Installation

The `react-cheeseburger` component does not require any external dependencies. Simply copy the `Cheeseburger` component code into your project, and you're ready to go!

1. Copy the `Cheeseburger` component code (from `index.tsx`) into your project.
2. Import and use it in your application as needed.

No need to install anything via npm or yarn — this component is self-contained and dependency-free.

## Usage

To use the `Cheeseburger` component, you'll need to manage the `isToggled` state (whether the menu is in its "opened" or "closed" state). Here's a basic example of how to implement it in your application:

### Example:

```tsx
import React, { useState } from 'react'
import Cheeseburger from './components/react-cheesburger'

const App = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = (event: React.MouseEvent) => {
    event.preventDefault()
    setToggled(!toggled)
  }

  return (
    <>
      <Cheeseburger
        color={'#303030'} // Customize the color of the cheeseburger
        width={60} // Set the width of the cheeseburger
        height={60} // Set the height of the cheeseburger
        isToggled={toggled} // Pass the toggled state
        onClick={toggle} // Trigger the toggle when clicked
      />
    </>
  )
}

export default App
```

### Props

The `Cheeseburger` component accepts the following props:

| Prop             | Type                                               | Default Value                     | Description                                                                                                  |
| ---------------- | -------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `isToggled`      | `boolean`                                          | `false`                           | Controls the toggled state of the hamburger menu. When `true`, the hamburger transitions to a "close" state. |
| `onClick`        | `function` (`React.MouseEventHandler<SVGElement>`) | `undefined`                       | Callback function triggered when the component is clicked.                                                   |
| `color`          | `string`                                           | `darkslategrey`                   | Sets the color of the hamburger menu.                                                                        |
| `width`          | `number`                                           | `100`                             | Sets the width of the hamburger menu in pixels.                                                              |
| `height`         | `number`                                           | `100`                             | Sets the height of the hamburger menu in pixels.                                                             |
| `rounded`        | `boolean`                                          | `false`                           | Determines whether the stroke ends should be rounded or square.                                              |
| `strokeWidth`    | `number`                                           | `1`                               | Specifies the width of the stroke (line thickness) of the hamburger lines.                                   |
| `slick`          | `boolean`                                          | `false`                           | Controls whether the middle line is shifted.                                                                 |
| `reverse`        | `boolean`                                          | `false`                           | Reverses the direction of the stroke-dashoffset animation.                                                   |
| `rotate`         | `number`                                           | `0`                               | Rotates the hamburger menu by the specified angle (in degrees).                                              |
| `innerlineSpeed` | `number`                                           | `350`                             | Controls the speed of the animation for the center line.                                                     |
| `outerLineSpeed` | `number`                                           | `500`                             | Controls the speed of the animation for the outer lines.                                                     |
| `animationType`  | `string`                                           | `cubic-bezier(0.4, 0.45, 0.5, 1)` | Defines the CSS animation timing function (e.g., `linear`, `ease-in`, `cubic-bezier`).                       |

### Customization

You can fully customize the appearance and behavior of the hamburger menu with the available props. For example:

- Change the color: `color="#ff5733"`
- Set different dimensions: `width={80} height={80}`
- Adjust animation speed: `innerlineSpeed={300} outerLineSpeed={450}`
- Enable a slick middle line: `slick={true}`
- Add a rotation effect: `rotate={90}`

### Example with Customization:

```tsx
<Cheeseburger
  color='#ff5733'
  width={80}
  height={80}
  isToggled={toggled}
  onClick={toggle}
  slick={true}
  rotate={90}
  innerlineSpeed={300}
  outerLineSpeed={450}
/>
```

## Acknowledgements
The animation technique used for this React component is based on [Mikael Ainalem's blog post](https://uxdesign.cc/the-menu-210bec7ad80c).

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project. Any improvements, fixes, or additional features are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

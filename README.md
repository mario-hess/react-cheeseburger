# react-cheeseburger

    const App = () => {
        const [toggled, setToggled] = useState(false)

        const toggle = (event: React.MouseEvent) => {
            event.preventDefault()
            setToggled(!toggled)
        }
        return (
                <Cheeseburger
                    color={'#303030'}
                    width={60}
                    height={60}
                    isToggled={toggled}
                    onClick={toggle}
                />
        )
    }

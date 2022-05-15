# react-cheeseburger
![Cheeseburger](https://media3.giphy.com/media/aG7cjLonel6I1oZJUn/giphy.gif?cid=790b7611630a748adab8f99498bb806ce1f9ad9b6691a525&rid=giphy.gif&ct=g)

You need to pass your isToggled state to the component like this:

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

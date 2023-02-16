
const OptionsGenre = (props) => {
    const optionsGenre = [
        {
            text: "Action", 
            onClick: props.actionProvider.handleChoiceAction,
            id: 1
        },
        {
            text: "Romance", 
            onClick: props.actionProvider.handleChoiceRomance,
            id: 2
        },
        {
            text: "Film d'animation", 
            onClick: props.actionProvider.handleChoiceAnimation,
            id: 3
        },
    ]

    const buttons = optionsGenre.map((option) => (
        <button key={option.id} onClick={option.onClick} className="option-button">
            {option.text}
        </button>
    ))

    return <div className="options-container">{buttons}</div>
}

export default OptionsGenre
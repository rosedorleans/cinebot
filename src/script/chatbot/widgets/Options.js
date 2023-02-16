
const Options = (props) => {
    const options = [
        {
            text: "Par titre", 
            onClick: props.actionProvider.handleChoiceByTitle,
            id: 1
        },
        {
            text: "Par genre", 
            onClick: props.actionProvider.handleChoiceByGenre,
            id: 2
        },
        {
            text: "Par catégorie", 
            onClick: props.actionProvider.handleChoiceByTop,
            id: 3
        },
    ]

    const buttons = options.map((option) => (
        <button key={option.id} onClick={option.onClick} className="option-button">
            {option.text}
        </button>
    ))

    return <div className="options-container">{buttons}</div>
}

export default Options
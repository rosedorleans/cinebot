
const OptionsCategory = (props) => {
    const optionsCategory = [
        {
            text: "IMDb Top 100", 
            onClick: props.actionProvider.handleChoiceIMdbTop100,
            id: 1
        },
        {
            text: "Oscarisés", 
            onClick: props.actionProvider.handleChoiceOscarWinning,
            id: 2
        },
    ]

    const buttons = optionsCategory.map((option) => (
        <button key={option.id} onClick={option.onClick} className="option-button">
            {option.text}
        </button>
    ))

    return <div className="options-container">{buttons}</div>
}

export default OptionsCategory
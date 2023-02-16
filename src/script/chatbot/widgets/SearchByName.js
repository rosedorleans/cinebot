import DataFetching from "./DataFetching.js";

const SearchByName = (props) => {
    console.log('props:', props)
    console.log('props.state:', props.state)
    let T_messages = props.state.messages
    console.log('T_messages:', T_messages)

    let result = T_messages.filter(obj => {return obj.type === "bot"})
    let keyBeforeLast = result.length - 2
    let searchType = result[keyBeforeLast].message.split('"')[1]

    let widget = result[keyBeforeLast].widget
    let keyLast = result.length - 1

    if(widget == "optionsCategory" || widget == "optionsGenre"){
        searchType = result[keyLast].message.split('"')[1]
    }
    console.log(searchType)

    const startUrl = "https://imdb-api.com/fr/API"
    const apiKey = "k_butivr97"
    const params = "/AdvancedSearch/"
    const isMovie = "/?title_type=feature&"

    let url
    switch (searchType) {
        case 'titre':
            url = startUrl+"/SearchMovie/"+apiKey+"/"
            break;
    }

    if(searchType == "titre"){
        let userInput = T_messages.findLast(x => x.type === 'user').message
        url = url + userInput
    }

    const isCategory = "groups="
    const isGenre = "genres="
    const top100 = "IMDb Top 100"
    const oscar = "Oscarisé"
    const action = "Action"
    const romance = "Romance"
    const animation = "Film d'animation"

    if(searchType == top100 || searchType == oscar){
        url = startUrl+params+apiKey+isMovie+isCategory
    }

    if(searchType == action || searchType == romance || searchType == animation){
        url = startUrl+params+apiKey+isMovie+isGenre
    }

    switch (searchType) {
        case top100:
            url = url + "top_100"
            break;
        case oscar:
            url = url + "oscar_winners"
            break;
        case action:
            url = url + "action"
            break;
        case romance:
            url = url + "romance"
            break;
        case animation:
            url = url + "animation"
            break;
    }
    console.log(url)

    if(!searchType){
        <div className="data-response">
            <p>Erreur</p>
        </div>
    }

    return (
        <div>
            <div className="data-response">
                < DataFetching url={url} />
            </div>
            <button 
                className="new-search-button" 
                onClick={props.actionProvider.handleStart}>
                    Nouvelle recherche
            </button>
        </div>
    )

}

export default SearchByName
import { createChatBotMessage } from "react-chatbot-kit";
import SearchByName from "./widgets/SearchByName";
import Options from "./widgets/Options";
import OptionsCategory from "./widgets/OptionsCategory";
import OptionsGenre from "./widgets/OptionsGenre";

const Config = {
	botName: "Cinebot",
	initialMessages: [createChatBotMessage(
		`Bonjour ! Je suis Cinébot, je suis là pour vous aidez à trouver des films à regarder. Première question : comment voulez-vous chercher un film ?`, 
		{widget: "options"}
	)],
	widgets: [
		{
			widgetName: 'options',
			widgetFunc: (props) => <Options {...props} />
		},
		{
			widgetName: 'optionsCategory',
			widgetFunc: (props) => <OptionsCategory {...props} />
		},
		{
			widgetName: 'optionsGenre',
			widgetFunc: (props) => <OptionsGenre {...props} />
		},
		{ 
			widgetName: 'searchByName', 
			widgetFunc: (props) => <SearchByName {...props} />
		},
	]
}

export default Config
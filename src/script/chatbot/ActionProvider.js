class ActionProvider {
	constructor(
		createChatBotMessage,
		setStateFunc
	) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.handleStart = this.handleStart.bind(this);
		this.handleChoiceByTitle = this.handleChoiceByTitle.bind(this);
		this.handleChoiceByGenre = this.handleChoiceByGenre.bind(this);
		this.handleChoiceByTop = this.handleChoiceByTop.bind(this);
		this.handleChoiceIMdbTop100 = this.handleChoiceIMdbTop100.bind(this);
		this.handleChoiceOscarWinning = this.handleChoiceOscarWinning.bind(this);
		this.handleChoiceAction = this.handleChoiceAction.bind(this);
		this.handleChoiceRomance = this.handleChoiceRomance.bind(this);
		this.handleChoiceAnimation = this.handleChoiceAnimation.bind(this);
	}

	handleHello(){
		const message = this.createChatBotMessage('Nice to meet you.')
		this.sendResponse(message)
	}

	// propose first choices
	handleStart(){
		const message = this.createChatBotMessage('Quelle est votre recherche ?', {widget: "options"})
		this.sendResponse(message)
	}

	// first choices
	handleChoiceByTitle(){
		const message = this.createChatBotMessage('Veuillez rentrer est votre recherche par "titre" :')
		this.sendResponse(message)
	}
	handleChoiceByGenre(){
		const message = this.createChatBotMessage('D\'accord. Quel genre ?', {widget: "optionsGenre"})
		this.sendResponse(message)
	}
	handleChoiceByTop(){
		const message = this.createChatBotMessage('D\'accord. Quel categorie ?', {widget: "optionsCategory"})
		this.sendResponse(message)
	}


	// category choices
	handleChoiceIMdbTop100(){
		const message = this.createChatBotMessage(
			'Voici une liste des films correspondants à votre recherche "IMDb Top 100" :',
			{widget: 'searchByName'}
		)
		this.sendResponse(message)
	}
	handleChoiceOscarWinning(){
		const message = this.createChatBotMessage(
			'Voici une liste des films correspondants à votre recherche "Oscarisé" :',
			{widget: 'searchByName'}
		)
		this.sendResponse(message)
	}


	// genre choices
	handleChoiceAction(){
		const message = this.createChatBotMessage(
			'Voici une liste des films correspondants à votre recherche "Action" :',
			{widget: 'searchByName'}
		)
		this.sendResponse(message)
	}
	handleChoiceRomance(){
		const message = this.createChatBotMessage(
			'Voici une liste des films correspondants à votre recherche "Romance" :',
			{widget: 'searchByName'}
		)
		this.sendResponse(message)
	}
	handleChoiceAnimation(){
		const message = this.createChatBotMessage(
			'Voici une liste des films correspondants à votre recherche "Film d\'animation" :',
			{widget: 'searchByName'}
		)
		this.sendResponse(message)
	}


	// main search
	handleSearch(value){
		const message = this.createChatBotMessage(
			'Voici une liste des films correspondants à votre recherche "'+value+'" :',
			{widget: 'searchByName'}
		)
		this.sendResponse(message)
	}


	// main response
	sendResponse(message) {
		this.setState(prev => ({
			...prev,
			messages : [...prev.messages, message]
		}))
	}
}

export default ActionProvider;
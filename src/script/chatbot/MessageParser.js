class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse(message) {
		console.log('message:', message)

		if(message.toLowerCase().includes('hello')){
			this.actionProvider.handleHello()
		}else {
			this.actionProvider.handleSearch(message)
		} 
	}
}

export default MessageParser;
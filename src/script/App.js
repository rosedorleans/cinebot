import React from "react";
import Chatbot from "react-chatbot-kit";

import Config from "./chatbot/config.js";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

import "../style/App.css";

// chatbot
import 'react-chatbot-kit/build/main.css'
import "../style/chatbot/chatbot.css";

function App() {
	return (
		<div className="App">
			<img src={ require('../img/mascot.png') } className="mascot"></img>
			<div style={{ width: "400px" }}>
				<Chatbot
					config={Config}
					messageParser={MessageParser}
					actionProvider={ActionProvider}
				/>
			</div>
		</div>
	);
}

export default App;

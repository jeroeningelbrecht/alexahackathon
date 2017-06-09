const Alexa = require('alexa-sdk');

const MSG_ERROR = 'Oops, something went wrong.  You know what, let\'s call it a day.';

const MSG_START = 'Hello.  How can I help you?';

const MSG_ROOM_ANSWER = 'The room for the training is Georges Minnen';

const MSG_LOCATION_ANSWER = 'Yes, it\'s up the escalator and the first room on the left';

const MSG_RESTAURANT_ANSWER = 'Sure, if you exit the building take the first street on the right.  On the corner you can find a nice Italian restaurant';

const MSG_BENEFIT_ANSWER = 'Yes, you just have to show your badge';

const MSG_RESTAURANT_THANK_YOU_ANSWER = 'Enjoy your meal';

const MSG_THANK_YOU_ANSWER = 'You\'re welcome!  Have a nice day';




const MSG_HELP = 'This is a help message to help you on your way.';

const states = {
	ERROR : '_ERROR',
	START : '_START'
};



module.exports.handlers = {
	LaunchRequest(){
		this.handler.state = states.START;
		this.emitWithState('Start');
	},
	Unhandled(){
		this.handler.state = states.ERROR;
		this.emitWithState('Unhandled');
	}
}

module.exports.starthandler = Alexa.CreateStateHandler(states.START, {

	Start(){
		this.emit(':ask', MSG_START, MSG_HELP);
	},

	'RoomIntent' : function(){
		this.emit(':ask', MSG_ROOM_ANSWER);
	},

	Unhandled(){
		this.handler.state = states.ERROR;
		this.emitWithState('Unhandled');
	}

});

module.exports.errorhandler = Alexa.CreateStateHandler(states.ERROR, {

	Unhandled(){
		this.emit(':tell', MSG_ERROR);
	}

});
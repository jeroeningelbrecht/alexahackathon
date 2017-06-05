const Alexa = require('alexa-sdk');

const MSG_ERROR = 'Oops, something went wrong.  You know what, let\'s call it a day.';
const MSG_START = 'Ok, let\'s start, you tiger!!!  Go, go, hackathon!!';

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
		this.emit(':tell', MSG_START);
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
const Alexa = require('alexa-sdk');

const MSG_ERROR = 'Oops, something went wrong.  You know what, let\'s call it a day.';
const MSG_START = 'Ok, let\'s start!';

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

module.exports.starthandler = Alexa.CreateStateHandler(States.START, {

	START(){
		this.emitWithState(':tell', )
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
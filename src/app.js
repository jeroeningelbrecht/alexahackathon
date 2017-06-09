const Alexa = require('alexa-sdk');

const MSG_ERROR = 'Oops, something went wrong.  You know what, let\'s call it a day.';

const MSG_START = 'Hello.  How can I help you?';

// trainingroom
const MSG_ROOM_ANSWER = 'The room for the training is Georges Minnen';

const MSG_LOCATION_ANSWER = 'Yes, it\'s up the escalator and the first room on the left';

const MSG_RESTAURANT_ANSWER = 'Sure, if you exit the building take the first street on the right.  On the corner you can find a nice Italian restaurant';

const MSG_BENEFIT_ANSWER = 'Yes, you just have to show your badge';

const MSG_RESTAURANT_THANK_YOU_ANSWER = 'Enjoy your meal';

// Bus
const MSG_TRAIN_BUS_ANSWER = 'Perhaps you can take a bus at half past four.  By the way, between four and five pm there is a bus every five minutes';


// Holiday

const MSG_HOLIDAY = 'Should I do the necessary for you';

const MSG_YES = 'Your request is sent to your manager.  Can I do anything else for you?';

const MSG_DAYS_LEAVE_LEFT = 'You still have twenty vacation days left';

const MSG_NICE = 'Ok.  You have to hurry because the bus will be there in two minutes.  Bye!'; //tell

const MSG_NO = 'Have a nice day';

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

	'LocationIntent' : function(){
		this.emit(':ask', MSG_LOCATION_ANSWER);
	},

	'ThankYouIntent' : function(){
		this.emit(':tell', MSG_THANK_YOU_ANSWER);
	},

	'RestaurantIntent' : function(){
		this.emit(':ask', MSG_RESTAURANT_ANSWER);
	},

	'BenefitIntent' : function(){
		this.emit(':ask', MSG_BENEFIT_ANSWER);
	},

	'RestaurantThankYouIntent' : function(){
		this.emit(':tell', MSG_RESTAURANT_THANK_YOU_ANSWER);
	},

	'TrainBusIntent' : function(){
		this.emit(':tell', MSG_TRAIN_BUS_ANSWER);
	},

	'AMAZON.SearchAction<object@WeatherForecast>' : function(){
		//this.emit('AMAZON.SearchAction<object@WeatherForecast>');
		//, () => {
			this.emit(':ask', 'That was the weather reception.  Do you want more?');	
		//});
	}, 

	'HolidayIntent' : function(){
		this.emit(':ask', MSG_HOLIDAY);
	},

	'AMAZON.YesIntent' : function(){
		this.emit(':ask', MSG_YES);
	},

	'DaysLeaveLeftIntent' : function(){
		this.emit(':ask', MSG_DAYS_LEAVE_LEFT);
	},

	'NiceIntent' : function(){
		this.emit(':tell', MSG_NICE);
	},

	'AMAZON.NoIntent' : function(){
		this.emit(':tell', MSG_NO);
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
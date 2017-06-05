



module.exports.handlers = {
	LaunchRequest(){
		this.emit(':tell', 'Ok. Thanks.');
	},
	Unhandled(){
		this.emit(':tell', 'Oops.  You know what, let\'s call it a day');
	}
}
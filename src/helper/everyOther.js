module.exports.register = function (Handlebars, options) {
  'use strict';
	Handlebars.registerHelper("everyOther", function (index, amount, scope) {
	    if ( ++index % amount ) 
	        return scope.inverse(this);
	    else 
	        return scope.fn(this);
	});
};
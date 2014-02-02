exports.roul = function (r) {
var roul = '';
	if (typeof r != "undefined") {
     roul = r;
	} else {
     roul = {};
	}
	var settings = money.settings;
	var Roulettestuff = {
	isOn: settings.casino.roul.on,
	auth: settings.casino.roul.auth,
	multibet: settings.casino.roul.multibet,
	multispin: settings.casino.roul.multispin,
	multicolor: settings.casino.roul.multicolor,
	};
	Users.User.prototype.rbet = null;
	Users.User.prototype.rbets = 0;
	Object.merge(roul, Roulettestuff);
	return roul;
};

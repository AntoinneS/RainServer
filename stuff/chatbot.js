exports.bot = function(b){
var bot = ''
if(typeof b != "undefined")  bot = b
else  bot = {};

var botStuff = {
//This is the name of your bot. Edit as you please.
name: '~RainBot',
//Jokes, if you don't want them just delete them along with all of the rest of the joke stuff. Edit as you please.
jokes: [
 'The original title for Alien vs. Predator was Alien and Predator vs Chuck Norris. The film was canceled shortly after going into preproduction. No one would pay nine dollars to see a movie fourteen seconds long.',
 'There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.',
 'Some magicans can walk on water, Chuck Norris can swim through land.',
 'If you were somehow able to land a punch on Chuck Norris your entire arm would shatter upon impact. This is only in theory, since, come on, who in their right mind would try this?',
 'Chuck Norris can cut through a hot knife with butter',
 'Chuck Norris has never caught a cold. How do we know? Colds still exist.',
 'Yo\' Mama is so dumb, she left her car at a stop sign because it never changed to "go."',
 'Yo\' Mama is so fat, when she stepped on the scale it said "one at a time"',
 'Yo\' Mama so fat, when she sat on an iPhone, she turned it to an iPad',
 'Yo\' Mama so stupid, she brought a spoon to the Superbowl.',
 'Yo\' mama so ugly that not even goldfish crackers smile back',
 'How does a blonde kill a fish? She drowns it.',
 'How do you amuse a blonde for hours? Write \'Please turn over\' on both sides of a piece of paper',
 'Girl: Why are you so ugly? Boy: I\'m you from the future.',
 '-Someone says something about you or boring -You, Say it to my butt because its the only thing that gives a crap.',
 'Me: *randomly walks up to Chinese person*. "Chow tang wong.". Chinese person: *nods, points to the bathroom*.',
 'Random Kid,"Haha you failed!" You, "So did your dads condom."',
 'Why did the redneck cross the road? He wanted to sleep in the ditch on the other side. ',
 'Why did the blind blonde cross the road? She was following her seeing-eye chicken.',
 'Why was there so much confusion with the Secret Service after George W. Bush took over the White House? Because President Bill Clinton\'s code name was also "Mr. Bush."',
 'Most wives whose husbands fool around have to worry about their husbands getting AIDS from sex. Hillary just has to worry about her husband getting sex from aides.'
],
//blahblahblah stuff for the bot
getRandjoke: function(){
return bot.jokes[Math.floor(Math.random()*20)];
},
say: function(name,message,r){
  return r.add('|c|' + name + '|' + message);
},
//By default u have to set the message of the day, but if you want to have one when your server first starts then edit it as you please.
MOTD: '',
//Also switch this to true if u want an MOTD to start automatically.
MOTDon: false,
//this is what your custom commands will start with, if u want it just as "/", then just put "/". Edit as you please
commandchar: '?',
//The rest is of this is blahblah stuff edit if you know what you are doing.
cmds: {
  motd: function(target, room, user) {
    if(this.can('mute')) {
      if(!target){
        return this.add('|c|' + bot.name + 'Message of the Day: ' + bot.MOTD)
      }
      if(!this.canTalk(target)) return false;
      else{
        this.add('|c|'+bot.name +'|The new Message of the Day is ' + target + '.');
        bot.MOTD = target;
		bot.MOTDon = true;
		if(Int){
		clearInterval(Int);
		}
		global.Int = setInterval(function(){Rooms.rooms.lobby.add('|c|' + bot.name + '|Message of the Day: ' + bot.MOTD)},300000);
      }
    }
    else{ 
      return false;
    }
  },
  
  motdoff: function(target, room, user) {
    if(this.can('mute')) {
	if(bot.MOTDon){
      return this.add('The MOTD function is now off');
      bot.MOTD = undefined;
	  clearInterval(Int)
	  }
	  else {
	  return this.sendReply('There is no MOTD on.')
	  }
  }
  else {
  return false;
  }
},

say: function(target, room, user){
  if(this.can('broadcast')) {
  if(!target) return this.sendReply('Please specify a message.');  
    this.logModCommand(user.name + ' used /say to say ' + target + '.');
    return bot.say(bot.name, target, room);
  }
  else {
    return false;
          }
},  

joke: function(target, room, user){
  if(this.can('broadcast')) {
    return bot.say(bot.name,bot.getRandjoke(),room);
  }
}
}
};

Object.merge(bot, botStuff);
return bot;
}

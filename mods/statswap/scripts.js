exports.BattleScripts = {
init: function() {
for (var i in this.data.Pokedex) {
var hp = this.modData('Pokedex', i).baseStats.hp;
var spd = this.modData('Pokedex', i).baseStats.atk;
var def = this.modData('Pokedex', i).baseStats.def;
var spa = this.modData('Pokedex', i).baseStats.spa;
var spd = this.modData('Pokedex', i).baseStats.spd;
var spe = this.modData('Pokedex', i).baseStats.spe;
this.modData('Pokedex', i).baseStats.hp = spe;
this.modData('Pokedex', i).baseStats.atk = spa;
this.modData('Pokedex', i).baseStats.def = spd;
this.modData('Pokedex', i).baseStats.spa =  atk;
this.modData('Pokedex', i).baseStats.spd = def;
this.modData('Pokedex', i).baseStats.spe = hp;
}
};

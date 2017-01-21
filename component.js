angular.module('pkmn.sm.prng')
    .component('pkmParentInput', {
        templateUrl: 'pkm-parent-input.html',
        controller: function PkmParentInputController() {
            this.male = {};
            this.male.IV = {
                HP: 31,
                Att: 31,
                Def: 31,
                SpAtt: 31,
                SpDef: 31,
                Spd: 31
            };

            this.female = {};
            this.female.IV = {
                HP: 31,
                Att: 31,
                Def: 31,
                SpAtt: 31,
                SpDef: 31,
                Spd: 31
            };

            var hPIvMap = [
                "Fighting",
                "Flying",
                "Poison",
                "Ground",
                "Rock",
                "Bug",
                "Ghost",
                "Steel",
                "Fire",
                "Water",
                "Grass",
                "Electric",
                "Psychic",
                "Ice",
                "Dragon",
                "Dark",
            ];

            function lsb(num) {
                return num % 2;
            }

            this.getHpType = function(iv) {
                return hPIvMap[
                    Math.floor(
                        (iv.HP % 2 + 2 * lsb(iv.Att) + 4 * lsb(iv.Def) + 8 * lsb(iv.Spd) + 16 * lsb(iv.SpAtt) + 32 * lsb(iv.SpDef)) * 15 / 63)
                ];
            }

        }

    })
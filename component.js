angular.module('pkmn.sm.prng')
    .component('pkmParentInput', {
        templateUrl: 'pkm-parent-input.html',
        controller: function PkmParentInputController() {
            this.male = {
                Item: 'NONE',
                Nature: 'DOCILE',
                AbilitySlot: '1',
            };
            this.male.IV = {
                HP: 31,
                Att: 31,
                Def: 31,
                SpAtt: 31,
                SpDef: 31,
                Spd: 31
            };

            this.female = {
                Item: 'NONE',
                Nature: 'DOCILE',
                AbilitySlot: '1',
            };
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

            this.natures = ["HARDY", "LONELY", "BRAVE", "ADAMANT", "NAUGHTY", "BOLD", "DOCILE",
                "RELAXED", "IMPISH", "LAX", "TIMID", "HASTY", "SERIOUS", "JOLLY",
                "NAIVE", "MODEST", "MILD", "QUIET", "BASHFUL", "RASH", "CALM",
                "GENTLE", "SASSY", "CAREFUL", "QUIRKY"
            ];

            this.itemSelections = ["NONE", "DESTINYKNOT", "EVERSTONE"];
            this.abilitySlots = ["1", "2", "HA"];


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
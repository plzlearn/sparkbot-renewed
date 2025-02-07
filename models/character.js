const characters = require('../data/characters')
const logger = require('../lib/logger')
const { MessageEmbed } = require('discord.js')

module.exports = class Character {
    constructor(id, name = null, faction = null, company = null, level = null, gearscore = null, role = null, primaryWeapon = null, secondaryWeapon = null, heartrune = null, weight = null, warInterest = null, notes = null) {
        this.id = id
        this._name = name
        this._faction = faction
        this._company = company
        this._level = level
        this._gearscore = gearscore
        this._role = role
        this._primaryWeapon = primaryWeapon
        this._secondaryWeapon = secondaryWeapon
		this._heartrune = heartrune
        this._weight = weight
        this._warInterest = warInterest
        this._notes = notes
    }

    get name() {
        return this._name
    }
    
    get faction() {
        return this._faction
    }

    get company() {
        return this._company
    }

    get level() {
        return this._level
    }

    get gearscore() {
        return this._gearscore
    }
    
    get role() {
        return this._role
    }

    get primaryWeapon() {
        return this._primaryWeapon
    }

    get secondaryWeapon() {
        return this._secondaryWeapon
    }
	
	get heartrune() {
		return this._heartrune
	}
	
    get weight() {
        return this._weight
    }
    
    get warInterest() {
        return this._warInterest
    }

    get notes() {
        return this._notes
    }

    set name(name) {
        if (name.length > 256) {
            logger.warn(`Rejected input "name" attribute value "${name}" for user ${this.id}.`)
            throw `Whoa, that name is way too long. Try something shorter. Again, it should be your character's in-game name.`
        }

        if (name.startsWith("=")) {
            logger.warn(`Rejected input "name" attribute value "${name}" for user ${this.id}.`)
            throw `It looks like you're trying to do some formula injection. Try again without the equal sign.`
        }
        this._name = name
        characters.setAttribute(this.id, "name", this.name)
    }
    
    set faction(faction) {
        let factionActual = ''

        if (faction.includes('cov') || faction.includes('yellow')){
            factionActual = 'Covenant'
        }
        if (faction.includes('marauders') || faction.includes('green')) {
            factionActual = 'Marauders'
        }
        if (faction.includes('syn') || faction.includes('purp')) {
            factionActual = 'Syndicate'
        }

        if (!factionActual) {
            logger.warn(`Rejected input "faction" attribute value "${faction}" for user ${this.id}.`)
            throw 'You didn\'t specify a faction that I know. Valid factions are "Covenant", "Marauders" or "Syndicate". Try again when you\'re ready.'
        }
        this._faction = factionActual
        characters.setAttribute(this.id, "faction", this.faction)
    }

    set company(company) {
        if (company.length > 256) {
            logger.warn(`Rejected input "company" attribute value "${company}" for user ${this.id}.`)
            throw `That's a really long name! Why don't you try it again. It should your company's in-game name.`
        }

        if (company.startsWith("=")) {
            logger.warn(`Rejected input "company" attribute value "${company}" for user ${this.id}.`)
            throw `Hmm, something didn't look quite right with that entry. Again, you should be giving me your company's in-game name.`
        }
        if (company == "none") {
            company = ""
        }
        this._company = company
        characters.setAttribute(this.id, "company", this.company)
    }

    set level(level) {
        let valid = true
        if (!Number.isInteger(level)) {
            valid = false
        } else if (level < 1 || level > 60) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "level" attribute value "${level}" for user ${this.id}.`)
            throw "Your level has to be an integer between 1 and 60, inclusive. Try again."
        }
        this._level = level
        characters.setAttribute(this.id, "level", this.level)
    }

    set gearscore(gearscore) {
        let valid = true
        if (!Number.isInteger(gearscore)) {
            valid = false
        } else if (gearscore < 1 || gearscore > 625) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "gearscore" attribute value "${gearscore}" for user ${this.id}.`)
            throw "Your gearscore has to be an integer between 1 and 625, inclusive. Try again."
        }
        this._gearscore = gearscore
        characters.setAttribute(this.id, "gearscore", this.gearscore)
    }
    
    set role(role) {
        if (role != "dps" && role != "tank" && role != "healer") {
            logger.warn(`Rejected input "role" attribute value "${role}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._role = role.charAt(0).toUpperCase() + role.slice(1)
        characters.setAttribute(this.id, "role", this.role)
    }

    set primaryWeapon(primaryWeapon) {
        let primaryActual = ''

        if (primaryWeapon.includes('sword') && !primaryWeapon.includes('great')) {
            primaryActual = 'Sword and Shield'
        }
        if (primaryWeapon.includes('hammer') || primaryWeapon.includes('maul')) {
            primaryActual = 'War Hammer'
        }
        if (primaryWeapon.includes('spear')) {
            primaryActual = 'Spear'
        }
        if (primaryWeapon.includes('hatchet')) {
            primaryActual = 'Hatchet'
        }
        if (primaryWeapon.includes('rapier')) {
            primaryActual = 'Rapier'
        }
        if (primaryWeapon.includes('great') && primaryWeapon.includes('axe')) {
            primaryActual = 'Great Axe'
        }
        if (primaryWeapon.includes('bow')) {
            primaryActual = 'Bow'
        }
        if (primaryWeapon.includes('musket')) {
            primaryActual = 'Musket'
        }
        if (primaryWeapon.includes('fire')) {
            primaryActual = 'Fire Staff'
        }
        if (primaryWeapon.includes('ice') || primaryWeapon.includes('frost')) {
            primaryActual = 'Ice Gauntlet'
        }
        if (primaryWeapon.includes('life') || primaryWeapon.includes('heal')) {
            primaryActual = 'Life Staff'
        }
        if (primaryWeapon.includes('void')) {
            primaryActual = 'Void Gauntlet'
        }
        if (primaryWeapon.includes('blunder')) {
            primaryActual = 'Blunderbuss'
        }
        if (primaryWeapon.includes('great') && primaryWeapon.includes('sword')) {
            primaryActual = 'Greatsword'
        }


        if (!primaryActual) {
            logger.warn(`Rejected input "primaryWeapon" attribute value "${primaryWeapon}" for user ${this.id}.`)
            throw 'You didn\'t specify a weapon that I know. Check the in-game names of the weapons if you aren\'t sure what to call it. Try again when you\'re ready.'
        }
        this._primaryWeapon = primaryActual
        characters.setAttribute(this.id, "primaryWeapon", this.primaryWeapon)
    }

    set secondaryWeapon(secondaryWeapon) {
        let secondaryActual = ''

        if (secondaryWeapon.includes('sword') && !secondaryWeapon.includes('great')) {
            secondaryActual = 'Sword and Shield'
        }
        if (secondaryWeapon.includes('hammer') || secondaryWeapon.includes('maul')) {
            secondaryActual = 'War Hammer'
        }
        if (secondaryWeapon.includes('spear')) {
            secondaryActual = 'Spear'
        }
        if (secondaryWeapon.includes('hatchet')) {
            secondaryActual = 'Hatchet'
        }
        if (secondaryWeapon.includes('rapier')) {
            secondaryActual = 'Rapier'
        }
        if (secondaryWeapon.includes('great') && secondaryWeapon.includes('ax')) {
            secondaryActual = 'Great Axe'
        }
        if (secondaryWeapon.includes('bow')) {
            secondaryActual = 'Bow'
        }
        if (secondaryWeapon.includes('musket')) {
            secondaryActual = 'Musket'
        }
        if (secondaryWeapon.includes('fire')) {
            secondaryActual = 'Fire Staff'
        }
        if (secondaryWeapon.includes('ice') || secondaryWeapon.includes('frost')) {
            secondaryActual = 'Ice Gauntlet'
        }
        if (secondaryWeapon.includes('life') || secondaryWeapon.includes('heal')) {
            secondaryActual = 'Life Staff'
        }
        if (secondaryWeapon.includes('void')) {
            secondaryActual = 'Void Gauntlet'
        }
        if (secondaryWeapon.includes('blunder')) {
            secondaryActual = 'Blunderbuss'
        }
        if (secondaryWeapon.includes('great') && secondaryWeapon.includes('sword')) {
            secondaryActual = 'Greatsword'
        }

        if (!secondaryActual) {
            logger.warn(`Rejected input "secondaryWeapon" attribute value "${secondaryWeapon}" for user ${this.id}.`)
            throw 'You didn\'t specify a weapon that I know. Check the in-game names of the weapons if you aren\'t sure what to call it. Try again when you\'re ready.'
        }
        this._secondaryWeapon = secondaryActual
        characters.setAttribute(this.id, "secondaryWeapon", this.secondaryWeapon)
    }
	
    set heartrune(heartrune) {
        let heartruneActual = ''

        if (heartrune.includes('stone')) {
            heartruneActual = 'Stoneform'
        }
        if (heartrune.includes('detonate')) {
            heartruneActual = 'Detonate'
        }
        if (heartrune.includes('vine')) {
            heartruneActual = 'Grasping Vines'
        }
        if (heartrune.includes('ascent')) {
            heartruneActual = 'Dark Ascent'
		}
        if (heartrune.includes('cannon')) {
            heartruneActual = 'Cannon Blast'
		}
		
        if (!heartruneActual) {
            logger.warn(`Rejected input "heartrune" attribute value "${heartrune}" for user ${this.id}.`)
            throw 'You didn\'t specify a Heartrune that I know. Check the in-game names of the Heartrunes if you aren\'t sure what to call it. Try again when you\'re ready.'
        }
        this._heartrune = heartruneActual
        characters.setAttribute(this.id, "heartrune", this.heartrune)
    }

    set weight(weight) {
        if (weight != "light" && weight != "medium" && weight != "heavy") {
            logger.warn(`Rejected input "weight" attribute value "${weight}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "light", "medium" or "heavy".'

        }
        this._weight = weight.charAt(0).toUpperCase() + weight.slice(1)
        characters.setAttribute(this.id, "weight", this.weight)
    }
	
    set warInterest(warInterest) {
        if (warInterest != "yes" && warInterest != "no") {
            logger.warn(`Rejected input "warInterest" attribute value "${warInterest}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "yes" or "no".'

        }
        this._warInterest = warInterest.charAt(0).toUpperCase() + warInterest.slice(1)
        characters.setAttribute(this.id, "warInterest", this.warInterest)
    }
    
    set notes(notes) {
        if (notes.length > 256) {
            logger.warn(`Rejected input "notes" attribute value "${notes}" for user ${this.id}.`)
            throw `Yikes, talking as much as my ex-wife! Can you summarize all that for me? Try to keep it under 256 characters, please.`
        }

        if (notes.startsWith("=")) {
            logger.warn(`Rejected input "notes" attribute value "${notes}" for user ${this.id}.`)
            throw `Uhhh, are you trying to do some injection there or something? Maybe try something that doesn't start with an equal sign.`
        }
        if (notes == "none") {
            notes = ""
        }
        this._notes = notes
        characters.setAttribute(this.id, "notes", this.notes)
    }

    get embed() {
        let embed = new MessageEmbed()
            .setTitle(this._name).setColor("#DAA520")
        embed.addField("Faction", this._faction || "None", false)
        embed.addField("Company", this._company || "None", false)
        if (this._level && this._level > 0) {
            embed.addField("Level", "" + this._level, true)
        } else {
            embed.addField("Level", "?", true)
        }
        if (this._gearscore && this._gearscore > 0) {
            embed.addField("Gearscore", "" + this._gearscore, true)
        } else {
            embed.addField("Gearscore", "?", true)
        }
        embed.addField("Role", this._role || "?", false)
        embed.addField("Weapon 1", this._primaryWeapon || "?", false)
        embed.addField("Weapon 2", this._secondaryWeapon || "?", false)
		embed.addField("Heartrune", this._heartrune || "?", false)
        embed.addField("Weight", this._weight || "?", false)
        embed.addField("War", this._warInterest || "?", false)
        if (this._notes) {
            embed.addField("Notes", this._notes, false)
        }
        return embed
    }

    static fromJson(key, value) {
        let character = new Character(
            key,
            value.name,
            value.faction,
            value.company,
            value.level,
            value.gearscore,
            value.role,
            value.primaryWeapon,
            value.secondaryWeapon,
			value.heartrune,
            value.weight,
            value.warInterest,
            value.notes)
        return character
    }
}
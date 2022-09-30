const mutations = require('../data/mutations')
const logger = require('../lib/logger')
const { MessageEmbed } = require('discord.js')

module.exports = class Mutation {
    constructor(id, name = null, genesisCodex = null, genesisRole = null, lazarusCodex = null, lazarusRole = null, dynastyCodex = null, dynastyRole = null, tempestCodex = null, tempestRole = null, depthsCodex = null, depthsRole = null, barnaclesCodex = null, barnaclesRole= null, enneadCodex = null, enneadRole = null, starstoneCodex = null, starstoneRole = null) {
        this.id = id
        this._name = name
        this._genesisCodex = genesisCodex
        this._genesisRole = genesisRole
        this._lazarusCodex = lazarusCodex
        this._lazarusRole = lazarusRole
        this._dynastyCodex = dynastyCodex
        this._dynastyRole = dynastyRole
        this._tempestCodex = tempestCodex
		this._tempestRole = tempestRole
        this._depthsCodex = depthsCodex
        this._depthsRole = depthsRole
        this._barnaclesCodex = barnaclesCodex
        this._barnaclesRole = barnaclesRole
        this._enneadCodex = enneadCodex
        this._enneadRole = enneadRole
        this._starstoneCodex = starstoneCodex
        this._starstoneRole = starstoneRole
    }

    get name() {
        return this._name
    }
    
    get genesisCodex() {
        return this._genesisCodex
    }

    get genesisRole() {
        return this._genesisRole
    }

    get lazarusCodex() {
        return this._lazarusCodex
    }

    get lazarusRole() {
        return this._lazarusRole
    }
    
    get dynastyCodex() {
        return this._dynastyCodex
    }

    get dynastyRole() {
        return this._dynastyRole
    }

    get tempestCodex() {
        return this._tempestCodex
    }
	
	get tempestRole() {
		return this._tempestRole
	}
	
    get depthsCodex() {
        return this._depthsCodex
    }
    
    get depthsRole() {
        return this._depthsRole
    }

    get barnaclesCodex() {
        return this._barnaclesCodex
    }

    get barnaclesRole() {
        return this._barnaclesRole
    }

    get enneadCodex() {
        return this._enneadCodex
    }

    get enneadRole() {
        return this._enneadRole
    }

    get starstoneCodex() {
        return this._starstoneCodex
    }

    get starstoneRole() {
        return this._starstoneRole
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
        mutations.setAttribute(this.id, "name", this.name)
    }
    
    set genesis(genesis) {
        const valueArray = genesis.split(" ");
        let valid = true
        if (!Number.isInteger(valueArray[1])) {
            valid = false
        } else if (genesisCodex < 1 || genesisCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "genesisCodex" attribute value "${genesisCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._genesisCodex = genesisCodex
        mutations.setAttribute(this.id, "genesisCodex", this.genesisCodex)
    }

    set genesisRole(genesisRole) {
        if (genesisRole != "dps" && genesisRole != "tank" && genesisRole != "healer") {
            logger.warn(`Rejected input "genesisRole" attribute value "${genesisRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._genesisRole = genesisRole.charAt(0).toUpperCase() + genesisRole.slice(1)
        mutations.setAttribute(this.id, "genesisRole", this.genesisRole)
    }

    set lazarusCodex(lazarusCodex) {
        let valid = true
        if (!Number.isInteger(lazarusCodex)) {
            valid = false
        } else if (lazarusCodex < 1 || lazarusCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "lazarusCodex" attribute value "${lazarusCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._lazarusCodex = lazarusCodex
        mutations.setAttribute(this.id, "lazarusCodex", this.lazarusCodex)
    }

    set lazarusRole(lazarusRole) {
        if (lazarusRole != "dps" && lazarusRole != "tank" && lazarusRole != "healer") {
            logger.warn(`Rejected input "lazarusRole" attribute value "${lazarusRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._lazarusRole = lazarusRole.charAt(0).toUpperCase() + lazarusRole.slice(1)
        mutations.setAttribute(this.id, "lazarusRole", this.lazarusRole)
    }

    set dynastyCodex(dynastyCodex) {
        let valid = true
        if (!Number.isInteger(dynastyCodex)) {
            valid = false
        } else if (dynastyCodex < 1 || dynastyCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "dynastyCodex" attribute value "${dynastyCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._dynastyCodex = dynastyCodex
        mutations.setAttribute(this.id, "dynastyCodex", this.dynastyCodex)
    }

    set dynastyRole(dynastyRole) {
        if (dynastyRole != "dps" && dynastyRole != "tank" && dynastyRole != "healer") {
            logger.warn(`Rejected input "dynastyRole" attribute value "${dynastyRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._dynastyRole = dynastyRole.charAt(0).toUpperCase() + dynastyRole.slice(1)
        mutations.setAttribute(this.id, "dynastyRole", this.dynastyRole)
    }

    set tempestCodex(tempestCodex) {
        let valid = true
        if (!Number.isInteger(tempestCodex)) {
            valid = false
        } else if (tempestCodex < 1 || tempestCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "tempestCodex" attribute value "${tempestCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._tempestCodex = tempestCodex
        mutations.setAttribute(this.id, "tempestCodex", this.tempestCodex)
    }

    set tempestRole(tempestRole) {
        if (tempestRole != "dps" && tempestRole != "tank" && tempestRole != "healer") {
            logger.warn(`Rejected input "tempestRole" attribute value "${tempestRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._tempestRole = tempestRole.charAt(0).toUpperCase() + tempestRole.slice(1)
        mutations.setAttribute(this.id, "tempestRole", this.tempestRole)
    }

    set depthsCodex(depthsCodex) {
        let valid = true
        if (!Number.isInteger(depthsCodex)) {
            valid = false
        } else if (depthsCodex < 1 || depthsCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "depthsCodex" attribute value "${depthsCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._depthsCodex = depthsCodex
        mutations.setAttribute(this.id, "depthsCodex", this.depthsCodex)
    }

    set depthsRole(depthsRole) {
        if (depthsRole != "dps" && depthsRole != "tank" && depthsRole != "healer") {
            logger.warn(`Rejected input "depthsRole" attribute value "${depthsRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._depthsRole = depthsRole.charAt(0).toUpperCase() + depthsRole.slice(1)
        mutations.setAttribute(this.id, "depthsRole", this.depthsRole)
    }

    set barnaclesCodex(barnaclesCodex) {
        let valid = true
        if (!Number.isInteger(barnaclesCodex)) {
            valid = false
        } else if (barnaclesCodex < 1 || barnaclesCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "barnaclesCodex" attribute value "${barnaclesCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._barnaclesCodex = barnaclesCodex
        mutations.setAttribute(this.id, "barnaclesCodex", this.barnaclesCodex)
    }

    set barnaclesRole(barnaclesRole) {
        if (barnaclesRole != "dps" && barnaclesRole != "tank" && barnaclesRole != "healer") {
            logger.warn(`Rejected input "barnaclesRole" attribute value "${barnaclesRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._barnaclesRole = barnaclesRole.charAt(0).toUpperCase() + barnaclesRole.slice(1)
        mutations.setAttribute(this.id, "barnaclesRole", this.barnaclesRole)
    }

    set enneadCodex(enneadCodex) {
        let valid = true
        if (!Number.isInteger(enneadCodex)) {
            valid = false
        } else if (enneadCodex < 1 || enneadCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "enneadCodex" attribute value "${enneadCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._enneadCodex = enneadCodex
        mutations.setAttribute(this.id, "enneadCodex", this.enneadCodex)
    }

    set enneadRole(enneadRole) {
        if (enneadRole != "dps" && enneadRole != "tank" && enneadRole != "healer") {
            logger.warn(`Rejected input "enneadRole" attribute value "${enneadRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._enneadRole = enneadRole.charAt(0).toUpperCase() + enneadRole.slice(1)
        mutations.setAttribute(this.id, "enneadRole", this.enneadRole)
    }

    set starstoneCodex(starstoneCodex) {
        let valid = true
        if (!Number.isInteger(starstoneCodex)) {
            valid = false
        } else if (starstoneCodex < 1 || starstoneCodex > 10) {
            valid = false
        }

        if (!valid) {
            logger.warn(`Rejected input "starstoneCodex" attribute value "${starstoneCodex}" for user ${this.id}.`)
            throw "Your codex level has to be an integer between 1 and 10. Try again."
        }
        this._starstoneCodex = starstoneCodex
        mutations.setAttribute(this.id, "starstoneCodex", this.starstoneCodex)
    }

    set starstoneRole(starstoneRole) {
        if (starstoneRole != "dps" && starstoneRole != "tank" && starstoneRole != "healer") {
            logger.warn(`Rejected input "starstoneRole" attribute value "${starstoneRole}" for user ${this.id}.`)
            throw 'Whatever you said was not one of the options I listed. Again, your options are "dps", "tank" or "healer".'

        }
        this._starstoneRole = starstoneRole.charAt(0).toUpperCase() + starstoneRole.slice(1)
        mutations.setAttribute(this.id, "starstoneRole", this.starstoneRole)
    }

    get embed() {
        let embed = new MessageEmbed()
        .setTitle(this._name).setColor("#DAA520")
        embed.addField("Genesis Codex", this._genesisCodex || "?", true)
        embed.addField("Genesis Role", this._genesisRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Lazarus Codex", this._lazarusCodex || "?", true)
        embed.addField("Lazarus Role", this._lazarusRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Dynasty Codex", this._dynastyCodex || "?", true)
        embed.addField("Dynasty Role", this._dynastyRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Tempest Codex", this._tempestCodex || "?", true)
        embed.addField("Tempest Role", this._tempestRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Depths Codex", this._depthsCodex || "?", true)
        embed.addField("Depths Role", this._depthsRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Barnacles Codex", this._barnaclesCodex || "?", true)
        embed.addField("Barnacles Role", this._barnaclesRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Ennead Codex", this._enneadCodex || "?", true)
        embed.addField("Ennead Role", this._enneadRole || "?", true)
        embed.addField("\u200B", "\u200B")
        embed.addField("Starstone Codex", this._starstoneCodex || "?", true)
        embed.addField("Starstone Role", this._starstoneRole || "?", true)
        return embed
    }

    static fromJson(key, value) {
        let mutation = new Mutation(
            key,
            value.name,
            value.genesisCodex,
            value.genesisRole,
            value.lazarusCodex,
            value.lazarusRole,
            value.dynastyCodex,
            value.dynastyRole,
            value.tempestCodex,
			value.tempestRole,
            value.depthsCodex,
            value.depthsRole,
            value.barnaclesCodex,
            value.barnaclesRole,
            value.enneadCodex,
            value.enneadRole,
            value.starstoneCodex,
            value.starstoneRole)
        return mutation
    }
}
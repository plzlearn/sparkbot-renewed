const messenger = require('../lib/messenger')

module.exports = (message) => {
    let weight = message.content.toLowerCase()
    try {
        message.author.character.weight = weight
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `I'll mark down that you're in ${message.author.character.weight} armor. We could use you on the battlefield, are you interested in War?`)

    message.author.flow.state = 'warInterestNew'
}
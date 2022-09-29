const messenger = require('../lib/messenger')

module.exports = (message) => {
    let heartrune = message.content.toLowerCase()
    try {
        message.author.character.heartrune = heartrune
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `Ah, ${message.author.character.heartrune}. Good choice. What's your weight class? Your options are "light", "medium", or "heavy".`)

    message.author.flow.state = 'weightNew'
}
const messenger = require('../lib/messenger')

module.exports = (message) => {
    let role = message.content.toLowerCase()
    try {
        message.author.character.role = role
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `Your role is ${role}, outstanding. What's the first weapon you use?`)
    message.author.flow.state = 'weapon1New'
}
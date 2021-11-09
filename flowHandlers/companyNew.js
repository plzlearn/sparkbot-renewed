const messenger = require('../lib/messenger')

module.exports = (message) => {
    let company = message.content
    try {
        message.character.company = company
    } catch (ex) {
        messenger.send(message, ex)
        return
    }

    if (!message.character.company) {
        messenger.send(message, `Hey, every player counts! Even if they're a solo player. What is your character\'s current level?`)
    } else {
        messenger.send(message, `Great to see another member of ${company}! What is your character\'s current level?`)
    }

    message.author.flow.state = 'levelNew'
}
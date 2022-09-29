const messenger = require('../lib/messenger')

module.exports = (message) => {
    let warInterest = message.content.toLowerCase()
    try {
        message.author.character.warInterest = warInterest
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `Noted. Anything else you want people to know about you? You can just say "none", too.`)

    message.author.flow.state = 'noteNew'
}
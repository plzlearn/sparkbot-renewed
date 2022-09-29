const messenger = require('../lib/messenger')

module.exports = (message) => {
    let name = message.content
    try {
        message.author.character.name = name
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `Nice to meet you, ${name}. What faction are you in? Valid options are "covenant", "marauders", or "syndicate".`)
    
    message.author.flow.state = 'factionNew'
}
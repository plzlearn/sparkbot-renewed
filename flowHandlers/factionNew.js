const messenger = require('../lib/messenger')

module.exports = (message) => {
    let faction = message.content.toLowerCase()
    try {
        message.author.character.faction = faction
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }
   
    messenger.send(message.author, `What company are you in? You can also say "none" if you aren't in one.`)

    message.author.flow.state = 'companyNew'
}
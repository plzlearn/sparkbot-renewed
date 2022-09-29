const messenger = require('../lib/messenger')

module.exports = (message) => {
    let gearscore = parseInt(message.content)
    try {
        message.author.character.gearscore = gearscore
    } catch (ex) {
        messenger.send(message.author, ex)
        return
    }

    messenger.send(message.author, `Your gearscore is ${gearscore}, got it. What's would best describe your role? Valid options are "dps", "tank" and "healer".`)
    message.author.flow.state = 'roleNew'
}
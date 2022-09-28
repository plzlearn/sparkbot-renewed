const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `These Heartrunes can sure come in clutch. Which one are you running?`)
    interaction.user.flow.state = 'heartruneEdit'
}
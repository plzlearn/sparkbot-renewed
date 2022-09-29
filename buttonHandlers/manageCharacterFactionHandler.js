const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `New friends, new experiences, I hope! What faction are you in currently? Valid options are "covenant", "marauders" or "syndicate".`)
    interaction.user.flow.state = 'factionEdit'
}
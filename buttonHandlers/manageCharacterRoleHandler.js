const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `Which role would best describe your playstyle? Valid options are "dps", "tank" or "healer".`)
    interaction.user.flow.state = 'roleEdit'
}
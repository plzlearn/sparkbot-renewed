const messenger = require('../lib/messenger')

module.exports = (interaction) => {
    messenger.send(interaction.user, `We are always looking for friends to join us on the battlefield. Are you interested in participating in War? Valid options are "yes" or "no".`)
    interaction.user.flow.state = 'warInterestEdit'
}
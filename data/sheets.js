const { google } = require('googleapis')
const { spreadsheetId, spreadsheetTabNameRoster } = require('../config.json')
const fs = require("fs")
const readline = require('readline');
const logger = require('../lib/logger');
const flows = require('./flows')
const messenger = require('../lib/messenger');
const { MessageEmbed } = require('discord.js');

const TRANSMISSION_COOLDOWN = 5
let lastTransmission = 0
let queuedTransmission = false
let queuedObj = {}

const PRIVATE_KEY = './privatekey.json'

const auth = new google.auth.GoogleAuth({
    keyFile: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

google.options({
    auth: auth
});

module.exports.update = (obj, next = () => { }) => {
    queuedObj = obj
    if (queuedTransmission) {
        return;
    }
    let currentTime = Math.floor(new Date().getTime() / 1000)
    // If we're off cooldown
    if (currentTime - lastTransmission > TRANSMISSION_COOLDOWN) {
        lastTransmission = currentTime
        sendUpdate()
    } else {
        queuedTransmission = true;
        setTimeout(sendUpdate, 5000)
    }
}

const sendUpdate = () => {
    queuedTransmission = false
    let sheets = google.sheets({ version: "v4", auth: auth })
    sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: `${spreadsheetTabNameRoster}!A:M`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: buildValueArray(queuedObj)
        }
    }, (err, res) => {
        if (err) {
            logger.error('Failed to update roster: ' + err);
            return
        }
    });
}

const buildValueArray = (obj) => {
    let value = [["Discord ID", "Name", "Faction", "Company", "Level", "Gearscore", "Role", "Weapon 1", "Weapon 2", "Heartrune", "Weight", "War", "Notes"]]

    let entries = Object.entries(obj).sort((a, b) => {
        return a[1].name.localeCompare(b[1].name);
    })
    for (const [k, v] of entries) {
        value.push([k, v.name, v.faction || " ", v.company || " ", v.level || " ", v.gearscore || " ", v.role || " ", v.primaryWeapon || " ", v.secondaryWeapon || " ", v.heartrune || " ", v.weight || " ", v.warInterest || " ", v.notes || " "])
    }
    return value
}
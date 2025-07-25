/*

☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆
                                                 
  _________ ___ ___ ._______   _________    
 /   _____//   |   \|   \   \ /   /  _  \   
 \_____  \/    ~    \   |\   Y   /  /_\  \  
 /        \    Y    /   | \     /    |    \ 
/_______  /\___|_  /|___|  \___/\____|__  / 
        \/       \/                     \/  
                    
DISCORD :  https://discord.gg/uBP5shzG2k          
YouTube :  https://www.youtube.com/@adyan2010dev                                 

Command Verified : ✓  
Website        : ssrr.tech  
Test Passed    : ✓

☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆
*/


const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const lang = require('../../events/loadLanguage');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('choose')
        .setDescription(lang.chooseDescription)
        .addStringOption(option =>
            option.setName('options')
                .setDescription(lang.chooseOptionsDescription)
                .setRequired(true)),

    async execute(interaction) {
        let sender = interaction.user;
        let options;

        if (interaction.isCommand && interaction.isCommand()) {
            options = interaction.options.getString('options').split(',');
        } else {
            const message = interaction;
            sender = message.author;
            const args = message.content.split(' ');
            args.shift(); 
            options = args.join(' ').split(',');
        }

        options = options.map(option => option.trim());

        let chosenOption;
        if (options.length === 1 && options[0].includes(' ')) {
            options = options[0].split(' ');
            chosenOption = options[Math.floor(Math.random() * options.length)];
        } else {
            chosenOption = options[Math.floor(Math.random() * options.length)];
        }

        const embed = new EmbedBuilder()
            .setColor('#3498db')
            .setTitle(lang.chooseTitle)
            .setDescription(`${lang.chooseOptionsText} ${options.join(', ')}\n${lang.chooseChosenText} ${chosenOption}`)
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};


/*

☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆
                                                 
  _________ ___ ___ ._______   _________    
 /   _____//   |   \|   \   \ /   /  _  \   
 \_____  \/    ~    \   |\   Y   /  /_\  \  
 /        \    Y    /   | \     /    |    \ 
/_______  /\___|_  /|___|  \___/\____|__  / 
        \/       \/                     \/  
                    
DISCORD :  https://discord.gg/uBP5shzG2k          
YouTube :  https://www.youtube.com/@adyan2010dev                     

Command Verified : ✓  
Website        : ssrr.tech  
Test Passed    : ✓

☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆
*/

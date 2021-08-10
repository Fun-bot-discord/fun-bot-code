module.exports = {
  name: "info",
  description: "Gives info about the commands of the bot",
  credits: "Me !",
  help: `
**Usage** - \`f!info [command]\`    
    `,
  execute(message, args, commands, bot, Discord) {
    //variables
    let commandAsked, commandToBeDescribed, description, useage, credits;

    if (args.length === 0) {
      commandAsked = "info"; //set default
    } else {
      commandAsked = args[0];
    }

    try {
      commandToBeDescribed = commands.get(commandAsked);
    } catch (error) {
      message.channel.send(`
${commandAsked} isin't a command, maybe you made a typo ?
If you are __**sure**__ you have made no mistake, take a screen shot of the following line and send it to the dev of this bot, if you don't know who it is, then just leave it. 0_0

||**Problem -**||||${error}|| 
        `);
      return;
    }

    description = commandToBeDescribed.description;
    useage = commandToBeDescribed.help;
    credits = commandToBeDescribed.credits;

    //bot logo
    const botLogo = new Discord.MessageAttachment("./assets/logo.png");

    let Embed = {
      color: 0x0099ff,
      title: `f!${commandAsked}`,
      url: "https://discord.com/oauth2/authorize?client_id=819212547449290794&scope=bot&permissions=2147483647",
      author: {
        name: bot.user.username,
        icon_url: "attachment://logo.png",
        url: "https://discord.com/oauth2/authorize?client_id=819212547449290794&scope=bot&permissions=2147483647",
      },
      thumbnail: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/1024px-Info_Simple_bw.svg.png",
      },
      fields: [
        {
          name: "__**Description -**__",
          value: description,
        },

        {
          name: "__**How to use the command**__",
          value: useage,
        },
        {
          name: "__**Credits -**__",
          value: credits,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "Have fun !",
        icon_url: "attachment://logo.png",
      },
    };

    message.react("🤔");
    message.channel.send({ files: [botLogo], embed: Embed });
  },
};

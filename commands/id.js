module.exports = {
  name: "id",
  description: "This tell your user info (sends a dm to you)",
  credits: "Me !",
  help: `
**Usage** - \`f!id\`
  (sends your user info to you privately in a dm)
  `,
  execute(message, args, Discord, bot) {
    //help command
    if (args.length != 0 && args[0] === "help") {
      message.channel.send(this.help);
      return;
    }
    //embed
    const botLogo = new Discord.MessageAttachment("./assets/logo.png");

    let Embed = {
      color: 0x0099ff,
      title: `${message.author.username}**'s info**`,
      url: "https://discord.com/oauth2/authorize?client_id=819212547449290794&scope=bot&permissions=2147483647",
      author: {
        name: bot.user.username,
        icon_url: "attachment://logo.png",
        url: "https://discord.com/oauth2/authorize?client_id=819212547449290794&scope=bot&permissions=2147483647",
      },

      thumbnail: {
        url: message.author.displayAvatarURL(),
      },
      fields: [
        {
          name: "**Tag -**",
          value: `\`${message.author.tag}\``,
        },

        {
          name: "**Id -**",
          value: `\`${message.author.id}\``,
        },
        {
          name: "**Account created at-**",
          value: `\`${message.author.createdAt}\``,
        },
        {
          name: "**Avatar url -**",
          value: message.author.displayAvatarURL(),
        },
      ],

      timestamp: new Date(),
      footer: {
        text: "Have fun !",
        icon_url: "attachment://logo.png",
      },
    };

    message.react(`👍`);
    message.author.send({ files: [botLogo], embed: Embed });
  },
};

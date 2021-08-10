module.exports = {
  name: "meme",
  description: "This is a command to get good memes",
  credits: `
https://github.com/D3vd/Meme_Api    
    `,
  help: `
**Usage** - \`f!meme\` or \`f!m\`
  (sends a meme)
    `,
  execute(message, args, request, Discord) {
    if (args.length != 0 && args[0] === "help") {
      message.channel.send(this.help);
      return;
    }

    url = "https://meme-api.herokuapp.com/gimme/wholesomememes";
    const botLogo = new Discord.MessageAttachment("./assets/logo.png");

    request(url, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      if (body.nsfw === true) return;

      let Embed = {
        color: 0x0099ff,
        title: body.title,
        url: body.postLink,
        image: {
          url: body.url,
        },
        timestamp: new Date(),
        footer: {
          text: "Have fun !",
          icon_url: "attachment://logo.png",
        },
      };
      message.channel.send({ files: [botLogo], embed: Embed });
    });
  },
};

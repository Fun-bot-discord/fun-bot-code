module.exports = {
  name: "hi",
  description: "This is a /'hi/' command",
  credits: "Me !",
  help: `
**Usage** - \`f!hi\`
  (tells \`hi\` back)
  `,
  execute(message, args) {
    //help command
    if (args.length != 0 && args[0] === "help") {
      message.channel.send(this.help);
      return;
    }
    message.channel.send(`Hi ! Fun bot here !`);
  },
};

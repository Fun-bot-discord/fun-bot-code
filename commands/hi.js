module.exports = {
  name: "hi",
  description: "This is a /'hi/' command",
  credits: "Me !",
  help: `
**Usage** - \`f!hi\`
  (tells \`hi\` back)
  `,
  execute(message, args) {
    message.channel.send(`Hi ! Fun bot here !`);
  },
};

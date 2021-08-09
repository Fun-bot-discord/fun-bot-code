module.exports = {
  name: "hi",
  description: "This is a /'hi/' command",
  execute(message, args) {
    message.channel.send(`Hi ! Fun bot here !`);
  },
};

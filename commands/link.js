module.exports = {
  name: "link",
  description:
    "This command gives you the link with which you can join this bot to your server",
  credits: "Me !",
  help: `
**Usage:**
  **-** \`f!link\`
  `,
  execute(message, args) {
    message.channel.send(
      "https://discord.com/oauth2/authorize?client_id=819212547449290794&scope=bot&permissions=2147483647"
    );
  },
};

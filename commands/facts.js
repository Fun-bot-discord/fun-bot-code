module.exports = {
  name: "facts",
  description: "This command sends facts on various stuff",
  credits: `

  `,
  help: `
**Usage** - \`f!fact [argument1]\`
  
\`argument1\` -
  **1.** 
  `,
  execute(message, args, request) {
    if (args.length === 0) {
      message.channel.send(
        "**Inadequate arguments,** type `f!fact help` or `f!facts help` to know how to use this command !"
      );
      return null;
    }

    //uses 'f!fact help'
    else if (args[0] === "help") {
      message.channel.send(`
**syntax** - \`f!fact [argument1]\`

\`argument1\`
    **-** 
        `);
    }
  },
};

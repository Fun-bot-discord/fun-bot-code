module.exports = {
  name: "joke",
  description: "This command give you random jokes",
  credits: "https://github.com/15Dkatz/official_joke_api",
  help: `
**Usage** -
 **-** \`f!j [argument1]\` or \`f!joke [argument1]\`
     (\`argument1\` is **optional**)
  
\`argument1\` specifies what you want to see -
  **1.** if no argument is specified
    **-** the bot will tell a random joke of either programming or general category 
  **2.** \`argument1\` is \`general\` or \`g\`
    **-** the bot will tell jokes **only** from the general category
  **3.** \`argument1\` is \`programming\` or \`p\`
    **-** the bot  will tell jokes **only** from the programming category
  `,
  execute(message, args, request) {
    let category, url;
    let type = 0;
    if (args.length === 0) {
      url = "https://official-joke-api.appspot.com/jokes/random";
    } else if (args[0] === "programming" || args[0] === "p") {
      url = "https://official-joke-api.appspot.com/jokes/programming/random";
      type = 1;
    } else if (args[0] === "general" || args[0] === "g") {
      url = "https://official-joke-api.appspot.com/jokes/general/random";
      type = 1;
    }

    //help command
    else if (args[0] === "help") {
      message.channel.send(this.help);
    } else {
      url = "https://official-joke-api.appspot.com/jokes/random";
    }

    request(url, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      let q, a;
      if (type === 1) {
        q = body[0].setup;
        a = body[0].punchline;
      } else {
        q = body.setup;
        a = body.punchline;
      }
      message.channel.send(`
**Q**: ${q}
**A**: ${a}
      `);
    });
  },
};

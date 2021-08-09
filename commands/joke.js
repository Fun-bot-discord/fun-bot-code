module.exports = {
  name: "joke",
  description: "This command give you random jokes",
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

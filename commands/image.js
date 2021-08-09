module.exports = {
  name: "image",
  description: "This command sends images based on what's asked",
  credits: `
**Cat images** - https://github.com/ThatCopy/catAPI
**Dog images** - https://dog.ceo/dog-api/
**Fox images** - https://github.com/xinitrc-dev/randomfox.ca
  `,
  help: `
**Usage** - \`f!img [argument1]\`

\`argument1\` - specifies what you want to see,
  **1.** \`cat\` for random *cat* images
    **-** (only one image at a time)
  **2.** \`dog\` for random *dog* images
    **-** can also type a 2nd argument specifying the number of images you want
      *Example -* \`f!img dog n\` where \`n\` is a number between *1* and *5* (both included)
  **3.** \`fox\` for random fox images
    **-** (only one image at a time)
  `,
  execute(message, args, request) {
    if (args.length === 0) {
      message.channel.send(
        "**Inadequate arguments,** type `f!image help` or `f!img help` to know how to use this command !"
      );
      return null;
    }

    //help command
    else if (args[0] === "help") {
      message.channel.send(this.help);
    }

    //uses 'f!img cat'
    else if (args[0] === "cat") {
      url = "https://thatcopy.pw/catapi/rest/";

      request(url, { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }

        message.channel.send(body.webpurl);
      });
    }

    //uses 'f!img dog'
    else if (args[0] === "dog") {
      url = "https://dog.ceo/api/breeds/image/random";

      number_of_images = -1; //if user did not specify number

      if (args.length > 1) {
        args[1] = parseInt(args[1]);
        if (args[1] > 0 && args[1] <= 5) {
          url = `https://dog.ceo/api/breeds/image/random/${args[1]}`;

          number_of_images = args[1]; // set number of images to what the user specified
        }
      }

      request(url, { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }

        if (number_of_images === -1) message.channel.send(body.message);
        else {
          body.message.forEach((link) => {
            message.channel.send(link);
          });
        }
      });
    }

    //uses f!img fox
    else if (args[0] === "fox") {
      url = "https://randomfox.ca/floof/";

      request(url, { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }

        message.channel.send(body.image);
      });
    }
  },
};

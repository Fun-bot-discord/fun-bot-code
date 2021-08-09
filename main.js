//link - https://discord.com/oauth2/authorize?client_id=819212547449290794&scope=bot&permissions=2147483647
//logo link - https://prnt.sc/128dhtb

const Discord = require("discord.js");
const request = require("request");

require("dotenv").config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

const readdirSync = require("fs").readdirSync;

client.commands = new Discord.Collection();

const commandFiles = readdirSync("./commands").filter((file) =>
  file.endsWith(".js")
);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Fun bot is online !");
  const https = require("https");
  const site_one = "https://django-bank.herokuapp.com/api/login";
  const site_two = "https://djank.herokuapp.com/api/login";

  //setInterval(function () {
  //https.get(site_two);
  //https.get(site_one);
  //}, 29000);

  //tell how many servers it is watching

  client.user.setActivity(` ${client.guilds.cache.size} servers!`, {
    type: "WATCHING",
  });
  setInterval(() => {
    client.user.setActivity(` ${client.guilds.cache.size} servers!`, {
      type: "WATCHING",
    });
  }, 60000);
});

client.on("message", (message) => {
  if (
    !message.content.toLocaleLowerCase().startsWith(prefix) ||
    message.author.bot
  )
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //General
  if (command === "hi" || command === "hello" || command === "h") {
    client.commands.get("hi").execute(message, args);
  } else if (command === "link" || command === "join" || command === "l") {
    client.commands.get("link").execute(message, args);
  } else if (command === "joke" || command === "j") {
    client.commands.get("joke").execute(message, args, request);
  }
  // Images
  else if (command === "image" || command === "img") {
    client.commands.get("image").execute(message, args, request);
  }

  //facts
  else if (command === "fact" || command === "facts") {
    client.commands.get("facts").execute(message, args, request);
  }

  //id
  else if (command === "id") {
    client.commands.get("id").execute(message, args, Discord, client);
  }

  //info
  else if (command === "info") {
    client.commands
      .get("info")
      .execute(message, args, client.commands, client, Discord);
  }

  //djank
  else if (command === "login") {
    //api = {password: "", username: "", id: "", bot_key:""}
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

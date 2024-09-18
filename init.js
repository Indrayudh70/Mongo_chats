const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Neha",
    to: "Priya",
    message: "Send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "aysh",
    to: "lula",
    message: "Send your sheets",
    created_at: new Date(),
  },
  {
    from: "abhi",
    to: "payal",
    message: "all the best",
    created_at: new Date(),
  },
  {
    from: "pinky",
    to: "sayan",
    message: "how are you?",
    created_at: new Date(),
  },
  {
    from: "Indrayudh",
    to: "Ishika",
    message: "I wish you are happy :)",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

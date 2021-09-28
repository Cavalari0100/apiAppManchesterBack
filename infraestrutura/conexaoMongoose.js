var mongoose = require("mongoose");
var mongooseConection = mongoose.connect("mongodb+srv://appManchesterAdm:ldN8JJAUIR4Pbc5t@appmanchester.0xduo.mongodb.net/appManchester?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongooseConection
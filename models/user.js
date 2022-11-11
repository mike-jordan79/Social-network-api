const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Email is required"],
    validate: function(val) {
        const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regexExp.test(val)
    }
  },
  thoughtFriends: [{
    type: mongoose.ObjectId,
    ref: 'Thought'
  }],
  parent: [{
    type: {
        type: String,
        ref: 'User'
    }
  }]
});

userSchema.virtual('friendCount')
.get(function() {
    return this.thoughtFriends,length;
})

const User = mongoose.model("User", userSchema);

module.exports = User;
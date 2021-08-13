const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
        type: String,
        required: true
    },
    // use Reactions schema to validate data for reactions
    // reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
);

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;

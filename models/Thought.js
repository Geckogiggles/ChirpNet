const { Schema, model } = require('mongoose');
const reactionSchema = require("../Schema/Reaction");

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: {
                max: 280,
                min: 1,
            }
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        reactions: [reactionSchema],
        //reaction is like a blueprint to create the object
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return `${this.reactions.length}`;
    })

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
const { Schema, model } = require('mongoose');


// Schema to create User model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: [true, "Text required"],
            validate: {
                max: 280
            }
        },
        username:
        {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
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



module.exports = reactionSchema;
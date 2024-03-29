const { Schema, Types } = require('mongoose');


// Schema to create reaction Schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: [true, "Text required"],
            maxlength: 280
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

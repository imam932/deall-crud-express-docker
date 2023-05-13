const mongoosePaginate = require("mongoose-paginate-v2");

module.exports = (mongoose) => {
    var schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: 1
        },
        gender: String,
        address: String,
        phone: String,
        password:{
            type:String,
            required: true,
            minlength:8,
            select: false
        },
        roles: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "role"
            }
        ]
    },
    { timestamps: true }
    );

    schema.plugin(mongoosePaginate);

    const User = mongoose.model("users", schema);
    return User;
};

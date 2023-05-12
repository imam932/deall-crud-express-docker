module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        name: String,
        gender: String,
        email: String,
        address: String,
        phone: String,
        description: String,
    },
    { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};

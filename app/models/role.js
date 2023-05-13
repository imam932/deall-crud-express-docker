module.exports = (mongoose) => {
    var schema = mongoose.Schema(
    {
        name: String
    },
    { timestamps: true }
    );
    const role = mongoose.model("role", schema);
    return role;
}
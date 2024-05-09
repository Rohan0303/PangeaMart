const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema creation
const brandSchema = Schema({
  label: { type: String, required: true, unique: true},
  value: { type: String, required: true, unique: true},
});

const virtual = brandSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
brandSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// export model
exports.Brand = mongoose.model("Brand", brandSchema);

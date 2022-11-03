const fs = require("fs/promises")
const Jimp = require("jimp");
const path = require("path")

const {User} = require("../../models/user")

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async(req, res)=> {
    const {_id} = req.user;
    const {path: tempUpload, originalname} = req.file;
    const extention = originalname.split(".").pop();
    const filename = `${_id}.${extention}`;
    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);

    Jimp.read(resultUpload)
    .then((image) => {
      return image.resize(250, 250).quality(60).write(resultUpload);
    })
    .catch((err) => {
      err.message = "Can't change image";
    });

    await User.findByIdAndUpdate(_id, {avatarURL});

    res.json({
        avatarURL,
    });
}

module.exports = updateAvatar;
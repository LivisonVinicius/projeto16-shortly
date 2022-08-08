import joi from "joi";

const urlsSchema = joi.object({
    url:joi.string().required()
});

export default urlsSchema;
import Tool from "../models/Tool.js";

export const createTool = async (req, res) => {
  const newTool = new Tool(req.body);
  try {
    const result = await newTool.save();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const getTools = async (req, res) => {
  const category = req.query.category;
  const filter = category ? { category: category } : {};
  const tools = await Tool.find(filter);
  res.status(200).send(tools);
};

export const getTool = async (req, res) => {
  const verifiedEmail = req.verifiedEmail;
  try {
    const result = await Tool.findById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateTool = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const result = await Tool.updateOne(
      { _id: id },
      {
        $set: body,
      }
    );
    res.status(200).send(result);
  } catch (error) {}
};

export const deleteTool = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Tool.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

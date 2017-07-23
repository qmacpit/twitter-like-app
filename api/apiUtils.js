const prepareRequestHandler = (func) => (req, res) => {
  try {
    res.json(func(req));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  prepareRequestHandler
};

const messages = require(`./${process.env.locale}.json`);

exports.format = (msgs) => {
  const output = { ...messages };

  Object.entries(msgs).forEach(([key]) => {
    output[key] = messages[key] || key;
  });

  return output;
};

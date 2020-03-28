const raedline = require("readline-sync");
const state = require("./state");

function robot() {
  const content = {
    maximumSentences: 7
  };

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  state.save(content);

  function askAndReturnSearchTerm() {
    return raedline.question("Type a Wikipedia search term: ");
  }

  function askAndReturnPrefix() {
    const prefixes = ["Who is", "What is", "The history of"];
    const selectedPrefixIndex = raedline.keyInSelect(
      prefixes,
      "Choose one option: "
    );
    const selectedPrefixText = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  }
}

module.exports = robot;

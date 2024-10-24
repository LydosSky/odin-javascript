const documentMock = (() => ({
  querySelector: (selector) => ({ innerHTML: null }),
}))();

const Formatter = (function (doc) {
  let timesRun = 0;
  const log = (message) => console.log(`[${Date.now()}] Logger ${message}`);
  const setTimesRun = () => {
    log("Setting times run");
    ++timesRun;
  };

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
  };

  return {
    makeUppercase,
    writeToDOM,
  };
})(document || documentMock);

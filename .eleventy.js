module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("fieldShortcode", function (name, kwargs = {}) {
    const defaultArgs = {
      value: "",
      type: "text",
    };
    const { value, type } = Object.assign({}, defaultArgs, kwargs);
    return `
      <div class="field">
        <input type="${type}" name="${name}" value="${value}" />
      </div>
    `;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};

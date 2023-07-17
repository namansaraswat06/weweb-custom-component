export default {
  options: {
    layout: ["flex"],
  },
  inherit: {
    type: "ww-layout",
  },
  editor: {
    label: {
      en: "Sortable list",
    },
  },
  triggerEvents: [
    {
      name: "update:list",
      label: { en: "On List update" },
      event: { value: "" },
      default: true,
    },
  ],
  properties: {
    data: {
      label: {
        en: "Items",
      },
      type: "Info",
      options: {
        text: { en: "Bind your data" },
      },
      bindable: "repeatable",
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        validations: [
          {
            type: "array",
          },
          {
            type: "object",
          },
        ],
        tooltip:
          "A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...]`",
      },
      /* wwEditor:end */
    },
    itemContainer: {
      hidden: true,
      defaultValue: {
        isWwObject: true,
        type: "ww-flexbox",
      },
    },
  },
};

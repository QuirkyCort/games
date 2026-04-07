var gdjs;
(function(gdjs2) {
  gdjs2.PixiFiltersTools.registerFilterCreator("Pixelate", {
    makePIXIFilter: function(target, effectData) {
      const pixelateFilter = new PIXI.filters.PixelateFilter(effectData.doubleParameters.size);
      return pixelateFilter;
    },
    updatePreRender: function(filter, target) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const pixelateFilter = filter;
      if (parameterName === "size") {
        pixelateFilter.size = value;
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixelate-pixi-filter.js.map

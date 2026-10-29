var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  gdjs2.PixiFiltersTools.registerFilterCreator("Brightness", {
    makePIXIFilter: function(target, effectData) {
      const brightness = new PIXI.filters.ColorMatrixFilter();
      brightness.brightness(1, false);
      return brightness;
    },
    updatePreRender: function(filter, target) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const brightnessFilter = filter;
      if (parameterName !== "brightness") {
        return;
      }
      brightnessFilter.brightness(gdjs2.PixiFiltersTools.clampValue(value, 0, 1), false);
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=brightness-pixi-filter.js.map

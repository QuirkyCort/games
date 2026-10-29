var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  gdjs2.PixiFiltersTools.registerFilterCreator("BlackAndWhite", {
    makePIXIFilter: function(target, effectData) {
      const colorMatrix = new PIXI.filters.ColorMatrixFilter();
      colorMatrix.blackAndWhite(false);
      return colorMatrix;
    },
    updatePreRender: function(filter, target) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const colorMatrix = filter;
      if (parameterName !== "opacity") {
        return;
      }
      colorMatrix.alpha = gdjs2.PixiFiltersTools.clampValue(value, 0, 1);
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=black-and-white-pixi-filter.js.map

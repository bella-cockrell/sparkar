const Animation = require('Animation');
const Scene = require('Scene');

Scene.root.findFirst('base_jnt')
.then(function(base) {
  const baseDriverParameters = {
  durationMilliseconds: 400,
    loopCount: Infinity,
    mirror: true
  };

  const baseDriver = Animation.timeDriver(baseDriverParameters);
  baseDriver.start();
  const baseSampler = Animation.samplers.easeInQuint(0.9, 1);
  const baseAnimation = Animation.animate(baseDriver, baseSampler);

  const baseTransform = base.transform;

  baseTransform.scaleX = baseAnimation;
  baseTransform.scaleY = baseAnimation;
  baseTransform.scaleZ = baseAnimation;
});
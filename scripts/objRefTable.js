const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{score: 0},
	{"8Direction": 0},
	{player: 0},
	{coin: 0},
	{scoretext: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	scoretext: class extends self.ITextInstance {}
}
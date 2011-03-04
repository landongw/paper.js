var GradientStop = this.GradientStop = Base.extend({
	beans: true,

	// TODO: support midPoint? (initial tests didn't look nice)
	initialize: function(color, rampPoint) {
		this._color = Color.read([color]);
		this._rampPoint = rampPoint !== null ? rampPoint : 0;
	},

	getRampPoint: function() {
		return this._rampPoint;
	},

	setRampPoint: function(rampPoint) {
		this._rampPoint = rampPoint;
	},

	getColor: function() {
		return this._color;
	},

	setColor: function() {
		this._color = Color.read(arguments);
	}
});

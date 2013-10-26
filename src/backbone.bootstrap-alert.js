/**
 * Bootstrap Alert wrapper for use with Backbone.
 *
 * @author Stanislav Lesnikov <stan@nashdot.com>
 *
 */
(function ($, _, Backbone) {

	//Set custom template settings
	var _interpolateBackup = _.templateSettings;
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g,
		evaluate: /<%([\s\S]+?)%>/g
	};

	var template = _.template('\
		<a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>\
		<strong>{{ title }}</strong>\
		{{ message }}\
	');

	//Reset to users' template settings
	_.templateSettings = _interpolateBackup;


	var Alert = Backbone.View.extend({

		tagName: 'div',
		className: 'alert fade',

		/**
		* Creates an instance of a Bootstrap Alert
		*
		* @see http://twitter.github.com/bootstrap/javascript.html#alert
		*
		* @param {Object} options
		* @param {String} [options.type]         Type: [success|info|warning|danger]. Default: 'info'
		* @param {String} [options.title]        Title. Default: empty
		* @param {String} [options.message]      Message. Default: empty
		* @param {Boolean} [options.fixed]       Default: true
		* @param {Function} [options.template]   Compiled underscore template to override the default one
		*/
		initialize: function (options) {
			_.bindAll(this, 'render', 'remove');

			this.options = _.extend({
				type: 'info',
				title: '',
				message: '',
				fixed: true,
				template: template
			}, options);
		},

		render: function () {
			var $el = this.$el,
			options = this.options;

			$el.html(options.template(options));

			$el.addClass('alert-' + options.type);

			if (options.fixed) {
				$el.addClass('fixed');
			}

			$el.css({
				top: 20,
				left: 0,
				position: 'fixed',
				width: '310px',
				zIndex: 10000000
			});

			// top center (Noty formula)
			$el.css({
				left: ($(window).width() - $el.outerWidth(false)) / 2 + 'px'
			});

			$el.alert();

			window.setTimeout(function () {
				$el.addClass('in');
			}, 20);

			window.setTimeout(function () {
				$el.fadeTo(500, 0).slideUp(500, function () {
					$el.remove();
				});
			}, 3000);

			return this;
		}
	});


	//EXPORTS
	//CommonJS
	if (typeof require == 'function' && typeof module !== 'undefined' && exports) {
		module.exports = Alert;
	}

	//AMD / RequireJS
	if (typeof define === 'function' && define.amd) {
		return define(function () {
			Backbone.BootstrapAlert = Alert;
		});
	}

	//Regular; add to Backbone.Bootstrap.Alert
	else {
		Backbone.BootstrapAlert = Alert;
	}

})(jQuery, _, Backbone);

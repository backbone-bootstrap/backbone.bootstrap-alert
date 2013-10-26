Backbone.BootstrapAlert
=======================


##Usage

	var alert = new Backbone.BootstrapAlert({
		type: type,
		title: 'Oh snap! You got an error!',
		message: 'Duis mollis, est non commodo luctus'
	});
	$('#alert').append(alert.render().el);


##Events


##Methods

###new Backbone.BootstrapAlert(options)
Set up the alert with the following options:

- `options.type`         Type: [success|info|warning|danger]. Default: 'info'
- `options.title`        Title. Default: empty
- `options.message`      Message. Default: empty
- `options.fixed`        If fixed. Default: true
- `options.template`     Compiled underscore template to override the default one

Release History
===============
*   __26/10/2013 - 0.1.0__: Initial release.

License
=======
Copyright (c) 2013 Stanislav Lesnikov
Licensed under the MIT license.

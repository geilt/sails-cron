/**
 * Cron Loader. Initializes Sails and runs a function in the /cron folder by name.
 */

if(process.argv[2]) load(process.argv[2]);
else console.log('Please specify a valid cron');

function load(func){
	console.log('Running Cron: ' + func);
	require('sails').load({ hooks: { grunt: false } }, function(err, sails) {
		require('./cron/' + func);
	});
}
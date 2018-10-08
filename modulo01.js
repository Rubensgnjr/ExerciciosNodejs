/**
	Tudo que tiver que ficar público, precisa ser exportado.
 */

 /**
  * Printa eu quero cafe
  */
function queroCafe()
{
	console.log('eu quero café!');
}

module.exports = 
{
	/**
	 * Printa Hello World!
	 */
	funcHello: function()
	{
		console.log('hello world!');
	},

	funcCafe: queroCafe
}
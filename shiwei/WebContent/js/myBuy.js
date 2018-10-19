/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-07 14:33:42
 * @version $Id$
 */


$(function(){
	$('#yifukuan').css('display','none');
	$('#head-nav div').tap(function(){
		$(this).addClass('active').siblings('#head-nav div').removeClass('active');
		if ( $(this).index()==0 ) {
			$('#yifukuan').css('display','none');
			$('#daifukuan').css('display','block');
		}
		else {
			$('#daifukuan').css('display','none');
			$('#yifukuan').css('display','block');
		}
	});
});
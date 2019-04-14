$(document).ready(function(){
	
	var contents;

	$('a.acc_bold').each(function(k,v){
		if($(this).html()=='255690899'){
			$(this).closest("tr").hide();
		}
		if($(this).html()=='215592519'){
			contents = $(this).closest('table').html();
			$(this).closest('tr').after("<tr><td><a href='https://docs.google.com/spreadsheets/d/10TmcPTXRudmOP4xH8VbCGbtso_HEMV1_Nr-ZF136ZWU/edit?usp=drive_web&ouid=106931759947217084754' target='_blank'>Các khoản chi trong tháng</a></td><td></td><td></td><td></td><td></td></tr>");
		}

	})

	$.post("http://localhost/son.php",{content:contents},function(m){

	})

	$("span.text_bold").each(function(k,v){
		if($(this).html()=='0'){
			$(this).closest("tr").hide();
		}
	})

})
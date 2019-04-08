
$("#issue_tree").before("<input class='jobtype' type='checkbox' data-color='true' id='div_coloring'><label for='div_coloring'>Coloring</label>");
$("#issue_tree").before("<input class='jobtype_hideall' type='button' data-ele='HideAll' id='div_9' value='HideAll'>");
$("#issue_tree").before("<input class='jobtype_hideallother' type='button' data-ele='HideAll' id='div_9' value='HideAll other'>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='Closed' id='div_1'><label for='div_1'>Closed</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='In Progress' id='div_2'><label for='div_2'>In Progress</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='Paused' id='div_3'><label for='div_3'>Paused</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='New' id='div_4'><label for='div_4'>New</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='Assigned' id='div_5'><label for='div_5'>Assigned</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='Resolved' id='div_6'><label for='div_6'>Resolved</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='Verified ' id='div_7'><label for='div_7'>Verified</label>");
$("#issue_tree").before("<input class='jobtype_remove' type='checkbox' data-ele='Feedback' id='div_8'><label for='div_8'>Feedback</label>");
$(".jobtype").change(function(){
	if($(this).data('color') == true){{
		coloring();
	}}
})
$(".jobtype_hideallother").click(function(){	
	let my_link_acc = $("#loggedas .user.active").attr('href');
	$("#issue_tree tr.issue  > td:nth-child(4)").each(function(k,v){	
		if($(this).children("a").attr('href') != my_link_acc){
			$(this).parent('tr').addClass('hidden');
		}	
	});		
	
})
$(".jobtype_hideall").click(function(){	
	removeelement('empty');	
	$(".jobtype_remove").prop('checked',true);
})
$(".jobtype_remove").change(function(){
	if($(this).prop('checked')==true){
		removeelement($(this).data('ele'));
	}else{
		showement($(this).data('ele'));
	}
})
function removeelement(value_content){
	if(value_content == 'empty'){
		$("#issue_tree tr.issue  > td").each(function(k,v){
			
				$(this).parent('tr').addClass('hidden');		
		});		
	}
	$("#issue_tree tr.issue  > td").each(function(k,v){
		if($(this).html()==value_content){
			$(this).parent('tr').addClass('hidden');
		}	
	});		
}
function showement(value_content){
	$("#issue_tree tr.issue  > td").each(function(k,v){
		if($(this).html()==value_content){
			$(this).parent('tr').removeClass('hidden');
		}	
	});		
}
function coloring(){
	$("#issue_tree tr.issue  > td").each(function(k,v){
		if($(this).html()=='Closed'){
			$(this).css({background:'gray'})    
		}
		if($(this).html()=='In Progress'){
			$(this).css({background:'yellow'})    
		}    
		if($(this).html()=='Paused'){
			$(this).css({background:'pink'})    
		}
		if($(this).html()=='New'){
			$(this).css({background:'blue'})    
		}
		if($(this).html()=='Assigned'){
			$(this).css({background:'orange'})    
		}
		if($(this).html()=='Resolved'){
			$(this).css({background:'green'})    
		}    
	})
}
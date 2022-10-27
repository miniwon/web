/**
 * 
 */
 
 $(function(){
	$('#signup > form').validate({
		rules : {
			name : { required:true },
			email : { required:true,
					  email : true
			},
			website : { url:true},
			password : { 
						minlength : 6,
						maxlength : 12
					},
			passconf : { equalTo : "#password"} 
		},	 		
		success : function(label){
			 label.addClass('valid');
			 label.text('성공');
	
	}

	});
	$(".check-all").click(function() {
	if($(".check-all").is(':checked')){
	$("input:checkbox[class='agree']").prop("checked", true)
	}else{
	$("input:checkbox[class='agree']").prop("checked", false)
	//---------------------------
	// attr() -> prop()
	}	
	
	})
	

});

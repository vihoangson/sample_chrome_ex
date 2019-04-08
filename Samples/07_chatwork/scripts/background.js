
$(document).keydown(function(event){
    if(event.which==112){
        $("#_emoticon").trigger("click");
        return false;
    }
    if(event.which==113){
        $("#_to").trigger("click");
        return false;
    }
    if(event.which==114){
        $("#_chatStatusAll").trigger("click");
        return false;
    }
    if(event.which==115){
        $("#_chatUnreadStatus").trigger("click");
        return false;
    }        
    if(event.which==116){
        $("#_chatStatusTypeTo").trigger("click");
        return false;
    }            
    
})

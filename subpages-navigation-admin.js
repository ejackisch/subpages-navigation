jQuery(document).ready(function($){
    $('.olt-subpages-top-title').live('click',function(){
        var widget = $(this).parents('.widget-content:first');
        if($(this).attr('checked'))
            $('.olt-subpages-title', widget).attr('disabled','disabled').css('background-color','#ccc');
        else
            $('.olt-subpages-title', widget).removeAttr('disabled').css('background-color','#fff');
    });
    
    $('.olt-subpages-root').live('change',function(){
        var widget = $(this).parents('.widget-content:first');
        
        if($(this).val() != -1){
            $('.olt-subpages-siblings', widget).attr('disabled','disabled').css('color','#999');
        }else{
            $('.olt-subpages-siblings', widget).removeAttr('disabled').css('color','#000');     
        }
    });
    
    $('.olt-subpages-nested').live('click',function(){
        var widget = $(this).parents('.widget-content:first');
        if($(this).attr('checked'))
            $('.olt-subpages-nested-options', widget).removeAttr('disabled').css('color','#000');
        else
            $('.olt-subpages-nested-options', widget).attr('disabled','disabled').css('color','#999');
    });  
    
});

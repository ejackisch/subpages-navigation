jQuery(document).ready(function($) {
    // Init - add hitarea
    $('.subpages-navi li:has(ul.children)').addClass('parent');
    
    // Hide children and bind action
    $('.subpages-navi-collapsible li.parent')
        .find('ul.children').hide().end()
        .addClass('expandable').prepend('<div class="hitarea" />')
        .find('>.hitarea').click(function(){
            if($(this).parent().hasClass('expandable')){            
                // Expand myself (and parents - if for some reason they are collapsed)
                $(this).parents('li.parent')
                    .addClass('expanding').removeClass('expandable')
                    .find('>ul.children').slideDown('fast');
                
                // Collapse others
                var root = $(this).parents('.subpages-navi:first');
                if(root.hasClass('subpages-navi-exclusive')) {
                    root.find('li.collapsible:not(.expanding)')
                        .addClass('expandable').removeClass('collapsible')
                        .find('>ul.children').slideUp('fast');
                }
                
                // Remove temp expanding class
                root.find('li.expanding').addClass('collapsible').removeClass('expanding');
            } else {
                //Collapse all children
                $(this).parent()
                    .find('ul.children').slideUp('fast').end()
                    .find('.collapsible').andSelf()
                        .addClass('expandable').removeClass('collapsible').end();
            }
            
            return false;
        });
    
    
    //(for some reason trying to consolidate these 2 selectors into one is giving me problems)
    
    // Expand current level (widget only)
    $('.subpages-navi-widget.subpages-navi-collapsible.subpages-navi-auto-expand li.subpages-navi-current-level')
       .parents('li.parent:first')
           .find('>.hitarea').click().end()
       .end()
       .find('>.hitarea').click();
    
    //Expand current level shortcode 
     $('.subpages-navi-shortcode.subpages-navi-collapsible.subpages-navi-auto-expand li.subpages-navi-current-level')
       .parents('li.parent:first')
           .find('>.hitarea').click().end()
       .end()
       .find('>.hitarea').click();
       
});
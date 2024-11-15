$(document).ready(function () 
  {
    
    $("#addButton").click(function () {
        var task = $("#task").val();
      if (task) {
        $(".taskList").append("<li class='taskk'><span class='tasktext'>" + task +  "</span> <button class='done'>Done</button>  <button class='remove'>Remove</button> <button class='edit'>Edit</button>  </li> ");
        $("#task").val("");
      }
    });

   
  
    $(".taskList").on("click",".remove",function()
    {
        $(this).parent().remove();
    });
    
    $(".taskList").on("click",".done",function()
    {
        $(this).parent().css('color','green');
        $(this).siblings('.tasktext').css('text-decoration','line-through');
        $(this).siblings('.edit').remove();
    });

    
    
    $(".taskList").on("click",".edit",function()
    {
        var value=$(this).siblings('.tasktext').text();
        $(this).parent().html("<input class='taskedit' type='text' value="+ value +"> <button class='editMain'> Edit </button>");
        $(".taskList").on("click",".editMain",function(){
           var editTask= $(".taskedit").val();
        if(editTask)
        {    
            $(this).parent().remove();
            $('.taskList').append("<li class='taskk'><span class='tasktext'>" + editTask +  "</span> <button class='done'>Done</button>  <button class='remove'>Remove</button> <button class='edit'>Edit</button>  </li> ");
        }});
    });
    

});


    

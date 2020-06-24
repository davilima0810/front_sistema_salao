(function () {
  $('[data-toggle="tooltip"]').tooltip();
  
})();

// $(document).ready(function(){  
 
//     var a = $('#addproduto');


//     $(document).on('click', '#add',function(){  
//         $('<p>'+
//         	'<div class="input-group mb-3">'+
//                       '<select class="custom-select" id="inputGroupSelect01">'+
//                         '<option selected>Produtos</option>'+
//                         '<option value="1">Produto 1</option>'+
//                         '<option value="2">Produto 2</option>'+
//                         '<option value="3">Produto 3</option>'+
//                       '</select>'+
//                       '<div class="input-group-append">'+
//                         '<a class="btn btn-danger" id="remInput"><i class="fa fa-trash"></i></a>'+
//                       '</div>'+
//              '</div>'+
//           '</p>').appendTo(a);

//         return false;
//     });  
 
//     $(document).on('click', '#remInput',function(){
//     	$( this ).parent('p').remove();
    	
//     	return false;
//     });  
 
// });  
$(document).ready(function(){  
	var i = 1;

	$('#add').click(function(){
		i++;
		$('#addproduto').append('<p id="row'+ i +'">'+
        	'<div class="input-group mb-3">'+
                      '<select class="custom-select" id="inputGroupSelect01">'+
                        '<option selected>Produtos</option>'+
                        '<option value="1">Produto 1</option>'+
                        '<option value="2">Produto 2</option>'+
                        '<option value="3">Produto 3</option>'+
                      '</select>'+
                      '<div class="input-group-append">'+
                        '<a class="btn btn-danger btn_remove" id="'+i+'"><i class="fa fa-trash"></i></a>'+
                      '</div>'+
             '</div>'+
          '</p>');
	});
	$(document).on('click', '.btn_remove',function(){
		var button_id = $(this).attr("id");
		$("#row"+button_id+"").remove();
	});
});
$(document).ready(function()
{
    $("#signup").validate({
        rules:{
            fname:{
                required: true,
                minlength: 5,
            },
            
            sname:{
                required: true,
                minlength: 5,
            },

            mnum:{
                required: true,
            },

            pass:{
                required: true,
                minlength: 8,
            },

            year:{
                required: true,
            },

            month:{
                required: true,
            },

        }
    })
});
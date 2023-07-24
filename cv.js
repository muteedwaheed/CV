
$(document).ready(function () {
    $("#button2").click(function () {
        $("#form1").toggle(2000);
    });
});

    $(document).ready(function(){
        $("#button1").click(function(){
            let nameValue = $("#name").val();
            $("#headerName").text(`${nameValue}`);
        });
        // location
        $("#button1").click(function(){
            let locationValue = $("#loc").val();
            $("#contact1").text(`${locationValue}`);
        });
        // phone
        $("#button1").click(function(){
            let phoneValue = $("#phone").val();
            $("#contact2").text(`${phoneValue}`);
        });
        $("#button1").click(function(){
            let emailVaue = $("#email").val();
            $("#contact3").text(`${emailVaue}`);
        });
        $("#button1").click(function(){
            let matricValue = $("#matric").val();
            $("#education1").text(`${matricValue}`);
        });
        $("#button1").click(function(){
            let interValue = $("#inter").val();
            $("#education2").text(`${interValue}`);
        });
        $("#button1").click(function(){
            let batchlorValue = $("#batchlor").val();
            $("#education3").text(`${batchlorValue}`);
        });
        $("#button1").click(function(){
            let profileValue = $('#prof').val();
            console.log(profileValue);
            $('#pdetail').text(`${profileValue}`);
        });
        $("#button1").click(function(){
            let wpValu = $("#wp1").val();
            $("#workPrf1").text(`${wpValu}`);
        });
        $("#button1").click(function(){
            let c = $("#wp2").val();
            $("#workPrf2").text(`${c}`);
        });
        $("#button1").click(function(){
            let f = $("#wp3").val();
            $("#workPrf3").text(`${f}`);
        })
    });

$(document).ready(function(){
    // skills
    $("#skil1").change(function(){
        let skilValue1 = $("#skil1").val();
        $("#list1").append(`<li>${skilValue1}</li>`);
    });
        $("#skil2").change(function(){
            let skilValue2 = $("#skil2").val();
            $("#list2").append(`<li>${skilValue2}</li>`);
        });


        $("#ref1").change(function(){
            let pv1 = $("#ref1").val();
            $("#list3").append(`<li>${pv1}</li>`);
        });

        $("#ref2").change(function(){
            let pv2 = $('#ref2').val();
            $('#list4').append(`<li>${pv2}</li>`);
        });

        $("#ex1").change(function(){
            let work1 = $("#ex1").val();
            $("#wList1").append(`<li>${work1}</li>`);
        });

        $("#ex2").change(function(){
            let work2 = $("#ex2").val();
            $("#wList2").append(`<li>${work2}</li>`);
        });
        // 2
        $("#ex5").change(function(){
            let a = $("#ex5").val();
            $("#wList3").append(`<li>${a}</li>`);
        });
        // 2.1
        $("#ex3").change(function(){
            let b = $("#ex3").val();
            $("#wList4").append(`<li>${b}</li>`);
        });
        // 3
        $("#ex6").change(function(){
            let d = $("#ex6").val();
            $("#wList5").append(`<li>${d}</li>`);
        });
        // 3.1
        $("#ex4").change(function(){
            let e = $("#ex4").val();
            $("#wList6").append(`<li>${e}</li>`);
        })
    });
    

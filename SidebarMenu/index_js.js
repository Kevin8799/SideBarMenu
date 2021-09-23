$(document).ready(function(){
    //jquery for toggle sub-menus
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.arrow').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function(){
      $('.sidebar').addClass('active');
      $('.menu-btn').css('visibility','hidden')
    });

    $('.close-btn').click(function(){
      $('.sidebar').removeClass('active');
      $('.menu-btn').css('visibility','visible')
    });

});



    //選擇圖檔
    document.querySelector("#head-file").addEventListener("change",function(){
        const reader = new FileReader();

        reader.addEventListener("load",()=>{
            localStorage.setItem("recent-image",reader.result);
            document.querySelector("#user-img").setAttribute("src",reader.result);
        });

        reader.readAsDataURL(this.files[0]);
    });


    document.addEventListener("DOMContentLoaded",()=>{
        const recentImageDataUrl = localStorage.getItem("recent-image");
        if(recentImageDataUrl){
            document.querySelector("#user-img").setAttribute("src",recentImageDataUrl);
        }
    });


    // 儲存個資
    document.querySelector("#save-btn").addEventListener('click',function(){
        const name_value  = document.querySelector('.name').value;
        localStorage.setItem('.name',name_value);

        const account_value = document.querySelector('.account-number').value;
        sessionStorage.setItem('.account-number', account_value);

        const email_value  = document.querySelector('.Email').value;
        localStorage.setItem('.Email',email_value);

        const address_value = document.querySelector('.address').value;
        localStorage.setItem('.address', address_value);

        const birthday_value = document.querySelector('.birthday').value;
        localStorage.setItem('.birthday', birthday_value);

        const pwd_value = document.querySelector('.account-pwd').value;
        localStorage.setItem('.account-pwd', pwd_value);

        

        alert("儲存成功!!!!");
        
    }
    );


    // 覆蓋個資
    const oldName = window.localStorage.getItem(".name");
    document.querySelector(".name").value = oldName;

    const oldAccount = window.localStorage.getItem(".account-number");
    document.querySelector(".account-number").value = oldAccount;

    const oldEmail= window.localStorage.getItem(".Email");
    document.querySelector(".Email").value = oldEmail;

    const oldAddress = window.localStorage.getItem(".address");
    document.querySelector(".address").value = oldAddress;

    const oldBirthday = window.localStorage.getItem(".birthday");
    document.querySelector(".birthday").value = oldBirthday;

    const oldPwd = window.localStorage.getItem(".account-pwd");
    document.querySelector(".account-pwd").value = oldPwd;


    
    

    //取消按鈕
    function click_Cancel_btn()
    {
        var x = confirm("確定取消"); 
        if(x==true)
        {
            localStorage.clear();
            window.location.reload();
        }

    }
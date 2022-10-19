$('.modal-close').click(function(e){
    //đoạn mã sẽ được thực thi khi sự kiện click() xảy ra
    var ss = confirm('Bạn muốn trở lại bảng điều khiển')
    if(ss===true){
        
        window.location.href ='index.html';
        sessionStorage.clear();
    }
})
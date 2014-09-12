  $(function(){
   
    $(document).on("click", "a[data-sharing]", function(e) {
        event.preventDefault();
        var type = $(this).data("sharing");
        var url=encodeURIComponent(location.href);
        var title=encodeURIComponent("软考帮 | 轻松学习软考，大家帮助大家");
        if(type=="cnRenren"){
        	 window.open("http://widget.renren.com/dialog/share?link="+url+"&title="+title);
        }else if(type=="cnDouban"){
        	 window.open("http://www.douban.com/recommend/?url="+url+"&title="+title);
        }else if(type=="cnQzone"){
        	 window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+url+"&title="+title);
        }else if(type=="cnTqq"){
        	 window.open("http://share.v.t.qq.com/index.php?c=share&a=index&url="+url+"&title="+title);
        }else if(type=="cnTsina"){
        	 window.open("http://service.weibo.com/share/share.php?url="+url+"&title="+title);
        }else{
        	console.log(type);
        }      
    })

  })

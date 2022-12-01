if(localStorage.getItem("transref") && localStorage.getItem("status")){
    if(localStorage.getItem("status")=== "PENDING"){
    setInterval(function () {
      let data = new formData();
      data.append(localStorage.getItem("transref"));
      $.ajax({
        url: "https://darko:8890/dashboard/getStatusMTNPay",
        type: "POST",
        data: data,
        contentType: false,
        success: function (response) {
          console.log(response);
        },
      });
    }, 2000);
    }
}
<script src="<?=$App_link?>/assets/js/jquery-3.5.1.min.js"></script>

<script src="<?=$App_link?>/assets/js/icons/feather-icon/feather-icon.js"></script>

<script src="<?=$App_link?>/assets/js/sidebar-menu.js"></script>
<script src="<?=$App_link?>/assets/js/config.js"></script>

<script src="<?=$App_link?>/assets/js/bootstrap/popper.min.js"></script>
<script src="<?=$App_link?>/assets/js/bootstrap/bootstrap.min.js"></script>

<script src="<?=$App_link?>/assets/js/prism/prism.min.js"></script>
<script src="<?=$App_link?>/assets/js/clipboard/clipboard.min.js"></script>
<script src="<?=$App_link?>/assets/js/custom-card/custom-card.js"></script>
<script src="<?=$App_link?>/assets/js/tooltip-init.js"></script>
 <script src="<?=$App_link?>/assets/js/bookmark/jquery.validate.min.js"></script>
 <script src="<?=$App_link?>/assets/js/bookmark/custom.js"></script>
 <script src="<?=$App_link?>/assets/js/select2/select2.full.min.js"></script>
 <script src="<?=$App_link?>/assets/js/select2/select2-custom.js"></script>
 <script src="<?=$App_link?>/assets/js/form-validation-custom.js"></script>


<script src="<?=$App_link?>/assets/js/script.js"></script>

<script src="<?=$App_link?>/assets/js/datatable/datatables/jquery.dataTables.min.js"></script>
<script src="<?=$App_link?>/assets/js/datatable/datatables/datatable.custom.js"></script>
<script src="<?=$App_link?>/assets/js/tooltip-init.js"></script>
<script src="<?=$App_link?>/assets/js/sweet-alert/sweetalert.min.js"></script>
<script src="<?=$App_link?>/assets/js/sweet-alert/app.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>

if(localStorage.getItem("transref") && localStorage.getItem("status")){
    if(localStorage.getItem("status")=== "PENDING"){
    let requete= setInterval(function () {
      let transref = localStorage.getItem("transref");
      var data = new FormData();
      data.append("transref",transref);
          console.log(data);
      $.ajax({
        url: "<?=$App_link?>/cloud/getStatusMTNPay",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (response) {
           let hello = JSON.parse(response);
         if (hello.responsecode === "00" && hello.responsemsg ==="SUCCESSFUL") {
               localStorage.setItem('status','Success')
                localStorage.setItem('transref',transref)
                $.ajax({
                 url: "<?=$App_link?>/cloud/success",
                 type: "POST",
                 data: data,
                 contentType: false,
                 processData: false,
                 success: function (response) {
                   let Back = response;
                   if(Back==1){
           window.location="<?=$App_link?>/dashboard/credited";
                   }
                 },
             });

              clearInterval(requete)
         }
         else if(hello.responsecode=== "-1")
         {
              localStorage.setItem('status','FAILED')
                localStorage.setItem('transref',transref)
             $.ajax({
                 url: "<?=$App_link?>/cloud/wrong",
                 type: "POST",
                 data: data,
                 contentType: false,
                 processData: false,
                 success: function (response) {
                     let = worngBack = response;
                     if (worngBack ==-1) {
                         localStorage.setItem('status','FAILED')
                         clearInterval(requete)
                     window.location="<?=$App_link?>/dashboard/failed";
                     }
                 },
                 error:(error)=>{
                     console.log(error);
                     clearInterval(requete)
                     window.location="<?=$App_link?>/dashboard/failed";
                 }
             });

             clearInterval(requete)
         }
        },
        error:(error)=>{
            console.log(error);
        }
      });
    }, 5000);
    }
}
    </script>


<?php
if (isset($success)) { ?>
    <input type="text" name="request_answer" id="request_answer" value="<?php echo strip_tags($success); ?>" hidden>
    <script>
        Swal.fire({
            icon: 'success',
            title: 'Bravo',
            text: '<?=$success?>'
        })
    </script>
<?php } ?>


<?php
if (isset($error)) { ?>
    <input type="text" name="request_answer" id="request_answer" value="<?php $m = strip_tags($error);
    echo $m; ?>" hidden>
    <script>
        Swal.fire({
            icon: 'error',
            title: 'Attention',
            text: '<?=$error?>'
        })
    </script>
<?php } ?>


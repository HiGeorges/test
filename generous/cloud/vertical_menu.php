<div class="page-main-header">
    <div class="main-header-right row m-0">
        <div class="main-header-left">
            <div class="logo-wrapper"><a href="index"><img class="img-fluid" src="<?=$App_link?>/assets/images/logo/xendizy-logov.png" alt="Logo Xendizy"></a></div>
            <div class="dark-logo-wrapper"><a href="index"><img class="img-fluid" src="<?=$App_link?>/assets/images/logo/xendizy-logov.png" alt="Logo Xendizy"></a></div>
            <div class="toggle-sidebar"><i class="status_toggle middle" data-feather="align-center" id="sidebar-toggle"></i></div>
        </div>

        <div class="nav-right col pull-right right-menu p-0">
            <ul class="nav-menus">
                <li><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize"></i></a></li>
                <li>
                    <div class="mode"><i class="fa fa-moon-o"></i></div>
                </li>
                <li class=" btn btn-primary onhover-dropdown"> <i data-feather="menu"></i> Menu
                    <ul class="chat-dropdown onhover-show-div">


                        <li>
                            <div class="media"><img class="img-fluid rounded-circle me-3" src="../assets/images/user/2.jpg" alt="">
                                <div class="media-body"><span>Kori Thomas</span>
                                    <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                                </div>
                                <p class="f-12">1 hr ago</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="onhover-dropdown p-0">
                    <button class="btn btn-primary-light" type="button"><a href="logout"><i data-feather="log-out"></i>Deconnexion</a></button>
                </li>
            </ul>
        </div>
        <div class="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal"></i></div>
    </div>
</div>

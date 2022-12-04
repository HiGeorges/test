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
                            <a href="index">
                            <div class="media">
                                <div class="media-body"><span>Tableau de bord</span>
                                       <p class="mb-0 font-roboto">Accueil</p>
                                </div>
                            </div>
                                </a>
                        </li>
                        <li><a href="verify?myid=<?=$UserID?>">
                                <div class="media">
                                    <div class="media-body"><span>Verifiication</span>
                                        <p class="mb-0 font-roboto">Verifier son compte</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li><a href="kyc?myid=<?=$UserID?>">
                            <div class="media">
                                <div class="media-body"><span>Demande de retrait</span>
                                        <p class="mb-0 font-roboto">Retrait</p>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="profil?myid=<?=$UserID?>">
                                <div class="media">
                                <div class="media-body"><span>Mon compte</span>
                                        <p class="mb-0 font-roboto">Profil</p>
                                </div>
                            </div>
                            </a>
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

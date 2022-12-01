<?php


ini_set('session.cookie_lifetime', false);



// Paths
define("PATH_REQUIRE", substr($_SERVER['SCRIPT_FILENAME'], 0, -9));
define("PATH", substr($_SERVER['PHP_SELF'], 0, -9));

// Website informations
define("WEBSITE_TITLE", "");
define("WEBSITE_NAME", "");
define("WEBSITE_URL", "");
define("WEBSITE_DESCRIPTION", "Echangez ou Achetez des $ PM ");
define("WEBSITE_KEYWORDS", "MoMo, Perfect Money, echange");
define("WEBSITE_LANGUAGE", "fr");
define("WEBSITE_AUTHOR", "Georges Joy");
define("WEBSITE_AUTHOR_MAIL", "georgesjoy@icloud.com");

// Facebook Open Graph tags
define("WEBSITE_FACEBOOK_NAME", "");
define("WEBSITE_FACEBOOK_DESCRIPTION", "");
define("WEBSITE_FACEBOOK_URL", "");
define("WEBSITE_FACEBOOK_IMAGE", "");

//Twitter Card data
define("WEBSITE_TWITTER_SITE", "");
define("WEBSITE_TWITTER_TITLE", "");
define("WEBSITE_TWITTER_DESCRIPTION", "");
define("WEBSITE_TWITTER_CREATOR", "");
define("WEBSITE_TWITTER_IMAGE", "");

// DataBase informations
define("DATABASE_HOST", "localhost");
define("DATABASE_NAME", "darko");
define("DATABASE_USER", "root");
define("DATABASE_PASSWORD", "root");

// Language
define("DEFAULT_LANGUAGE", "fr");




if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
    $App_link = "https";
else
    $App_link = "http";

$App_link .= "://";

$App_link .= $_SERVER['HTTP_HOST'];

const APP_NAME =  "Lazare";

define("APP_LINK", $App_link);
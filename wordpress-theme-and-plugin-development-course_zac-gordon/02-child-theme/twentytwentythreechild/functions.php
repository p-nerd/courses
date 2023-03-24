<?php

function tttc_load_style()
{
    wp_enqueue_style("parent-style", get_template_directory_uri() . "/style.css");
    wp_enqueue_style("main-style", get_stylesheet_directory_uri() . "/style.css");
}

add_action("wp_enqueue_scripts", "tttc_load_style");

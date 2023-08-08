<?php

function phpforwp_theme_styles()
{
    wp_enqueue_style("font-css", "https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round");
    wp_enqueue_style("main-css", get_stylesheet_uri(), ['font-css'], get_the_time());
}

function phpforwp_read_more_link($excerpt)
{
    $extended_excerpt = $excerpt;
    $extended_excerpt .= " <a href='" . get_permalink() . "'>Read more &raquo;</a>";
    return $extended_excerpt;
}

add_action('wp_enqueue_scripts', 'phpforwp_theme_styles');
add_filter('get_the_excerpt', 'phpforwp_read_more_link');

<?php

$post_titles = [
    "10 Surprising Benefits of Meditation You Never Knew About",
    "Why Traveling Alone is the Best Thing You Can Do for Yourself",
    "The Science Behind Happiness: What Actually Makes Us Happy?",
    "5 Delicious and Easy Vegan Recipes for Meatless Mondays",
    "How to Build a Successful Online Business: Tips from Top Entrepreneurs",
    "The Psychology of Procrastination: Why We Delay and How to Overcome It",
    "Why Learning a Second Language is More Important Than Ever",
    "The Importance of Self-Care: Tips for Taking Care of Your Mind, Body, and Soul",
    "The Rise of Plant-Based Diets: Why More People are Going Vegan",
    "How to Stay Motivated and Productive When Working From Home",
];

function display_title($title)
{
    echo "<h3>$title</h3>\n";
}

foreach ($post_titles as $post_title) {
    display_title($post_title);
}

<?php get_header();?>

<?php if (have_posts()): while (have_posts()): the_post();?>
		    <article <?php post_class()?> >
		        <h2><?php the_title();?></h2>
		        <?php the_content();?>
		        <footer>
		            <p class="byline">
		                Author:
		                <a href="<?php echo get_author_posts_url($post->post_author); ?>">
		                    <?php the_author();?>
		                </a> |
		                Date: <?php the_time("M. j, Y");?> |
		                Categories: <?php the_category(", ");?> |
		                Tags: <?php the_tags("", ", ", "");?>
		            </p>
		        </footer>
		    </article>
		<?php endwhile;else: ?>
    <h2><?php esc_html_e('404 Error', 'phpforwp');?></h2>
    <p><?php esc_html_e('Sorry, content not found.', 'phpforwp');?></p>
<?php endif;?>

<?php get_footer();?>


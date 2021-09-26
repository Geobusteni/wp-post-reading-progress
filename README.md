# wp-post-reading-progress

######Summary
A plugin that adds the reading time and the reading progress to single posts, pages or both of them.

At this moment, there is no support for custom post types. It will be added at a later time.

The information box shows a progress bar, which will complete once you scroll the content.

Going back up, it will empty the progress bar.

It also calculates and shows the total reading time for the page/post.

You can change the bar colors and add the bar to the top, bottom, left or right side of the screen .

The default location is static, before the content and then floated, once the scroll view passes the box location.

You can also choose if you want to show the total reading time, only the progress, or both and if you want to show it on posts only, pages only, or on both of them.

Optionally, the settings can be removed from the database, once the plugin uninstalls.

Please use the issues for ideas about enhancing or for bugs.

Please keep in mind that the support is pretty limited at this point, since this plugin is done in my free time, so it might take a while until resolving an issue.


######Developers

 - Example for extending the Options Settings.
```
function example_extending_options() {
	add_settings_field(
		'example_id', // the id - use your own id.
		esc_html__( 'Input description.', 'wp-post-reading-progress' ),
		'WP_POST_READING_PROGRESS\Options\create_field', // this function is used for constructing the html input.
		'wp_post_reading_progress', // the page slug
		'wp-post-reading-progress-section', // the page section
		[
			'id'          => 'example_id', // required callback argument.
			'type'        => 'color', // required callback argument. Options: color, text, checkbox, select, number.
			'description' => esc_html__( 'Input description', 'wp-post-reading-progress' ),
			'default'     => '#000',
		]
	);
}
add_action('admin_init', '\\example_extending_options', 20);
```


 - Use `wp_post_reading_progress_style` filter to add more CSS styles using php (specific for further colour options, for example).

### SVN

Use this command for syncing the plugin git repo with the SVN repo. Asstes are synced separately.
```
rsync -rv --exclude-from='/Users/alex/DEKODE/kulsiteplugins/app/public/wp-content/plugins/wp-post-reading-progress/svn-exclude.txt' /Users/alex/DEKODE/kulsiteplugins/app/public/wp-content/plugins/wp-post-reading-progress/ /Users/alex/DEKODE/kulsiteplugins/app/public/svn/trunk
```


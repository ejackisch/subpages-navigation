=== Subpages Navigation ===
Contributors: oltdev, godfreykfc, enej, ejackisch
Tags: pages, subpages, shortcode, widget, menu, navigation, collapsible, tree, sitemap
Requires at least: 2.8
Tested up to: 3.1
Stable tag: trunk

Display a collapsible list of subpages in a post using shortcode, as a sidebar widget, or anywhere else in the template using a PHP function.

== Description ==


This plugin is meant to be a replacement for to the popular but dated [Subpage Listing][1] plugin. It takes advantage of the Shortcode and Widgets API to provide standardized, consistent, easy to use and flexible interface for interacting with its features.

The plugin allows you to easily display a collapsible list of subpages anywhere on your site using one of the following ways:

* As a sidebar widget
* Using the `[subpages]` shortcode in a page
* Using the `subpages_navigation()` PHP function anywhere else

No matter which way you choose, the plugin provides a handful of configurable options which makes it extremely powerful. You can control the maximum depth of the tree, whether the list should be collapsible and so on. For instance, you can generate a simple sitemap by placing the following shortcode into any top level pages: \[subpages collapsible=false siblings=true\]. Checkout usage.html (included in the plugin folder) for more inspiration.

The generated HTML is fully XHTML compliant (even properly indented for readability!), and the JS collapsible menu will fall back gracefully to a static nested list when JavaScript is turned off. A handful of CSS classes are applied to the generated code which makes styling super easy. See styling-guide.html (included in the plugin folder) for more details.

**Please note: you need to copy a CSS file and an image file into your template folder. See the [installation instructions][2] for details.**

 [1]: http://wordpress.org/extend/plugins/subpage-listing/
 [2]: http://wordpress.org/extend/plugins/subpage-navigation/installation/

== Installation ==

1. Extract the zip file and just drop the contents in the wp-content/plugins/ directory of your WordPress installation.
2. Copy subpages-navigation.css and the images folder into your template directory. This usually means wp-content/themes/your_template.
3. Activate the Plugin from Plugins page.
4. Enjoy!

Please note that you will likely have to tweak the CSS to make it work with your theme. You can do this by editing the subpages-navigation.css in your template directory and/or replacing image that shipped with the plugin. See the [styling guide][1] for details. We know that this is not optimal, but please understand that it is very difficult to come up with a default stylesheet that works seamlessly across all themes. If you need help, please go to the WordPress forum.

if you add 
`define("SUBPAGE_NAVIGATION_SCRIPT",false);
define("SUBPAGE_NAVIGATION_SCRIPT",false); `

to your functions.php file it will not load the default css and js files.


== Frequently Asked Questions ==

**It's not working!!!**

* Did you forget to [copy the stylesheet and images][1] to your theme folder? And remember you would probably have to tweak the CSS to make it work for you theme as well.

 [1]: http://wordpress.org/extend/plugins/subpages-navigation/installation/

== Screenshots ==
1. Widget options
2. What the widget and shortcode should look like in twenty ten

== Change log ==

= 1.2 = 
* Added the ability to display custom nav menus
* [subpages] shortcode now supports the auto-expand current level feature (expand='true') and menu parameter (menu='menu name') to display a custom menu

= 1.1.1= 
* bugfix: some of the js and css files were not loaded properly.

= 1.1 =
* If everything works for you you don't need to update. 
* This release makes Twenty Ten work out of the box
* the install is much easier
* some optimizations, only load admin javascript when it really needs it.
* internationalize


= 1.00 =
* first public release.








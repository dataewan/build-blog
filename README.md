# Build [dataewan](http://dataewan.github.com/) blog

Method used to build my blog.
I use [wok](https://github.com/mythmon/wok) to build it.
Need to install that first.
The documentation of wok is very good, 
if more information is required about how this works take a look there.

## Writing content

Content goes in the `content/posts/` directory.
You can write content in markdown or restructured text formats. 

Wok lets you put meta data at the top of each post.
This meta data is YAML formatted.
Put the {key : value} data at the start of the post.
Then three dashes mark the end of the meta data and the start of the post.

These two bits of meta data are necessary for each post:

    title: Page title
    date: 2013-03-17
    
These bits are optional, 
only put them in if I need them.

    tags: [Comma, separated, list, of, tags]
    scripts:
        - List of paths to scripts
        - /js/script1.js

## Building the site

There is a `Makefile`.
`make wok` creates everything in the `dataewan.github.com` folder.

Upload that to somewhere to get the site on the internet.

## Adding scripts (and particularly D3)

Add scripts to the scripts list in the meta data.
The page will be built with a reference to the script.

Place the script into the `media/js` folder. 
When the site is built, it gets copied over to the `dataewan.github.com/js` folder.

I chose wok because it seemed very flexible, 
particularly for putting posts with [D3](http://d3js.org/) up.
If I want to put a post with D3 in it I take the following steps:

### 1. Put a svg in my post

Need to put a svg element in the markup for my post.
If I'm using rst, use the [raw pass through](http://docutils.sourceforge.net/docs/ref/rst/directives.html#raw-data-pass-through) directive.
If I'm using markdown, I can just stick the HTML in the markdown.

### 2. Link to the javascript

Put the javascript in the meta data.
Then put the script in the `media/js` directory (as described above).

If I want to experiment with the script,
I make the changes in the `dataewan.github.com/js/` directory.
There is a build target (`make scripts`) to copy this over to the `media` directory.

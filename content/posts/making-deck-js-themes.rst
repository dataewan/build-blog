title: Making your own deck.js themes
date: 2013-04-10
published: True
---

I like `deck.js`_ a lot.
Everything is written in a text file (HTML5 format),
which means that using deck.js has `all the usual things I like about text files`_.
I like using it instead of Powerpoint where I can.

.. _`deck.js`: http://imakewebthings.com/deck.js/
.. _`all the usual things I like about text files`: http://dataewan.github.io/whats-so-good-about-text-files.html

There are lots of other javascript / html presentation frameworks available.
I chose deck.js because it seems to offer a good combination of simplicity and versatility,
but another framework might suit you better.

The demo deck for `deck.js`_ is very impressive.
The end of the demo deck is very open-ended though:

.. figure:: /img/deck-js-themes/getting-started-deck.png

    Something in between I guess...

I was a bit lost once I got to the end.
After some experimentation
I've made some results I'm happy with.
This post will describe how I rolled my own ``deck.js`` theme.

I don't know if this is the best way to make the theme.
If you have any improvements then let `me know`_.

.. _`me know`: https://twitter.com/dataewan


Source code
    https://github.com/dataewan/deck.js
Live demo
    http://dataewan.github.io/deck.js/presenting-analysis/

Making your own deck.js themes
------------------------------

There are a few themes that come with deck.js.
But sometimes you want to make your own theme;
either because you have to work within strict design guides,
or you want to make your work stand out a bit more.
I also wanted to tweak the themes to make them better for presenting analysis.

First things first, fork the `deck.js repo`_.
Within the repo there is a ``themes/style`` directory which contains the styling css.
You can change the theme of your deck by pointing to one of the other css files in this directory.

.. _`deck.js repo`: https://github.com/imakewebthings/deck.js

As well as the css for themes,
we've also been given the scss_ files for the themes.
If you haven't used ``scss`` before
it is a lot like ``css``, but makes some significant improvements.
The `Sass website`_ gives a good introduction to the language,
and demonstrates why it is a good idea.

I made my own theme by taking a copy of the ``swiss.scss`` file and tweaking that.

.. _scss: http://sass-lang.com/
.. _`Sass website`: http://sass-lang.com/


----

Aside: Using compass and blueprint in deck.js
_____________________________________________

I like using compass_ and blueprint_ with scss.
They provide a lot of ready made patterns, 
making things like nice typography and CSS3 patterns easier.

.. _compass: http://compass-style.org/
.. _blueprint: http://compass-style.org/reference/blueprint/

Installing them in the ``deck.js`` project works well.
First, follow the `installation instructions for compass`_,
then run the following to activate compass / blueprint in the deck.js project.

.. sourcecode:: console

    cd deck.js/themes/style
    compass install compass
    compass install blueprint
    
.. _`installation instructions for compass`: http://compass-style.org/install/

----

The main things I changed with my theme are:

 - Use some of the blueprint mixins,
   make it match the css for http://dataewan.github.io a bit more.

 - Change a lot of the hard-coded variables,
   substituting them for blueprint or compass variables where I could.

 - Made a few mix-ins of my own,
   to improve the theme for presenting data and analysis.


I've created demo_ of my theme and some experiments with presenting data.

.. _demo: http://dataewan.github.io/deck.js/presenting-analysis/

The final thing to explain are the data analysis mixins I've written.

My own data analysis mixins
___________________________

Mixins_ are a feature of Sass.
They let you reuse bits of styling over again.
The mixins I've made are simple,
but useful if you want to present data.

.. _Mixins: http://sass-lang.com/#mixins

``blockquote`` mixin
====================

Tidied up the blockquote to make it match the blockquote on http://dataewan.github.io.
Separated it from the rest of the scss to make it easier to maintain.


``speakerinfo`` mixin
=====================

The ``speakerinfo`` mixin puts whatever it is applied to down in the bottom right corner of the slide,
and reduces the text size.

I've applied this to the ``div.speakerinfo``,
I stick this on the first slide and have it contain my name and the date of the presentation.


``smallleft``, ``largeleft``, ``smallright`` and ``largeright`` mixins
======================================================================

I've made these so you can separate your slide into sections.
They are useful if you want to present a plot in a lot of detail with some commentary on the side,
or if you want a lot of commentary on the slide; with a few plots, figures or notes in the margin.

The ``smallleft`` mixin is applied to the ``div.small-left`` in the scss file,
``largeright`` is applied to the ``div.large-right`` and so on.

Here's a diagram of how the divs all fit together.

.. figure:: /img/deck-js-themes/leftrightdivs.png

    How to use the positional divs together.

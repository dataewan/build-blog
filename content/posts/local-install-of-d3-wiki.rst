title: Downloading the D3 documentation
tags: d3
date: 2013-04-08
---

I had a few long train journeys recently.
Wanting to make best use of my time,
I searched for a way to download the `D3 wiki`_.

.. _`D3 wiki`: https://github.com/mbostock/d3/wiki

I found `this suggestion`_ from Mike Bostock:

.. _`this suggestion`: https://groups.google.com/forum/?fromgroups=#!topic/d3-js/FCespD5yxcw%5B1-25-false%5D

.. epigraph::

    You can install gollum and run it locally, and it should be nearly 
    identical to what you see on GitHub: 

    https://github.com/github/gollum 

    Mike 

This method works very well.
Here are the steps I took.

Installing `gollum`
-------------------

gollum_ is the system that powers git wikis.
Installing it on your machine gives you almost exactly the same experience as viewing a wiki on github.

.. _gollum: https://github.com/gollum/gollum

I use ubuntu.
Before installing gollum,
I needed to install the development packages for ruby 1.9.1.

.. sourcecode:: console

    sudo apt-get install ruby1.9.1-dev libxml2-dev libxslt-dev
    sudo gem install gollum

Download D3 wiki
----------------

Clone the repository for the D3 wiki:

.. sourcecode:: console

    git clone https://github.com/mbostock/d3.wiki.git

I didn't see the git link for the wiki immediately.
Click on the `Git Access` link from the main wiki page to get the link.

Start gollum
------------

Now just start gollum

.. sourcecode:: console

    cd d3.wiki
    gollum

Start your web browser and point it to `localhost:4567`_.
The wiki there is almost exactly the same as the github one,
but you can view it offline!

.. _`localhost:4567`: http://localhost:4567/

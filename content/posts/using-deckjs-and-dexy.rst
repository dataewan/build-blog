title: Create reproducible analysis using dexy
date: 2013-06-01
tags: [deck.js, dexy, presentations]
---

I've been experimenting with creating reproducible analysis.
I *really* like tools like knitr_ and sweave_ for R.
You combine your analysis and writeup in one place,
which means your writeup always contains your most current results.
No more kicking yourself for forgetting to update a number in your writeup when the data changes.

.. _knitr: http://yihui.name/knitr/

.. _sweave: http://www.stat.uni-muenchen.de/~leisch/Sweave/

These tools are great, 
but are designed pretty heavily around R.
It is possible to `use them with other languages`_,
but it doesn't work quite as perfectly.
I want something that is language agnostic.
I'd also like it to be able to make lots of different kinds of documents,
a really flexible documentation tool for any language would be lovely.

.. _`use them with other languages` : https://github.com/yihui/knitr-examples/blob/master/023-engine-python.Rmd

.. _jinja : http://jinja.pocoo.org/docs/

I was googling for phrases like *"knitr for python"* or *"sweave for python"*.
I found `this answer`_ on Stackoverflow which suggests using a tool called dexy_.

.. _`this answer` : http://stackoverflow.com/questions/5032711/sweave-with-non-r-code-chunks/5033941#5033941

.. _dexy: http://www.dexy.it/

.. epigraph::

    The new new thing (for multi-language, multi-format) docs may be dexy.it which for example these guys at opengamma.org use as the backend.

    Ana, who is behind dexy, is also giving a lot of talks about it so also look at the dexy blog.

    -- Dirk Eddelbuettel


Why dexy? What is it good at?
-----------------------------

Dexy takes code and passes it through filters_.
There are filters for executing python, R, shell scripts, converting latex to pdf, serving your documents as simple web pages;
there are filters for pretty much everything,
and it is also possible to write your own.
This satisfies my requirement for the tool to be language agnostic.

.. _filters: http://www.dexy.it/filters/

One of the most common filters you use is the ``jinja`` filter that passes data to a jinja template.
Dexy also comes with code highlighting (using pygments) and code spitting (using idiopidae).
This makes it really flexible for creating well documented code and analysis.

It is a really versatile tool that can do the following:

 - Act as a ``make`` tool for your analysis

 - Pass your markup through a template to make a nice final document

 - You can also make some very nice documentation for your code, syntax highlighted with descriptions of what is going on in between

Using dexy, python and jinja together
_____________________________________

When I started using dexy to write up analysis,
I used a ``dexy.yaml`` configuration that looked a bit like this:

.. sourcecode:: python

    index.html|jinja:
        - .py|py

This takes the index.html document and passes it through the jinja template filter.
All the python files in the directory (the ``.py`` bit) are passed through the ``py`` filter.
This simply runs each script, 
storing the standard output of each script in a dictionary that is available to the jinja template.

For example,
if I had the following script in my directory:


(``fourtimesfive.py``)

.. sourcecode:: python

    print 4 * 5

I could access this in my jinja template using a line like this:

.. sourcecode:: jinja

    Four times five is {{ d['fourtimesfive.py|py'] }}


Passing complex data to dexy
____________________________

This gets tiresome quite quickly.
Every result you want to pass to the jinja template has to come from a separate script.
You end up with a directory full of wee scripts that all do approximately the same thing.

To get around this,
make your scripts print JSON formatted data to standard output.
You can then get access to more complex data structures in your template by doing things like this:

(``fourtimesfive.py``)

.. sourcecode:: python

    import json

    output = {}

    output['fourtimesfive'] = 4*5
    output['sixtimesseven'] = 6*7

    print json.dumps(output)


.. sourcecode:: jinja

    Four times five is 
    {{ d['fourtimesfive.py|py'].from_json().fourtimesfive }}

    Six times seven is 
    {{ d['fourtimesfive.py|py'].from_json().sixtimesseven }}
    
See `this link`_ for a documented example of doing this from Ana, the author of dexy.

Doing this makes it much easier to present your analysis.
You make one script that does the number crunching and outputs JSON.  
You call this script using dexy.
Then you pass this JSON output to a jinja template:
creating HTML, LaTeX, Markdown, rST, any format of document you like.

I've `made my own analysis`_ example that uses python and dexy to create a reproducible slide deck with `deck.js`_.
You change one variable and it creates a new set of results based on that parameter.

.. _`this link` : https://github.com/ananelson/dexy-feature-examples/tree/master/dexy_feature_examples/reading-json

.. _`deck.js`: http://imakewebthings.com/deck.js/

.. _`made my own analysis` : https://github.com/dataewan/deck.js.and.dexy

.. note::

    One thing that tripped me up.

    Say your script doesn't output to stdout,
    instead it writes the output to a JSON file,
    you need to change your dexy.yaml file to use the ``add-new-files`` option like this.

.. sourcecode:: python

        example.markdown|jinja|markdown|easyhtml:
            - example.py|py:
                       - py: { add-new-files: True }



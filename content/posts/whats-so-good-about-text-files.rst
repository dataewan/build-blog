title: What's so good about text files?
tags: text, unix
date: 2013-04-04
---

Say I have a choice between two tools: 
one that holds its configuration, data and content in flat text files,
or one that has a lovely polished user interface and hides the complexity from me.
I'll almost always select the tool that uses text files and is more difficult to configure.
I don't think this is a very normal point of view,
so I'll take some time to explain what I like so much about text files.

The first thing is that lots of clever programmers through history have spent most of their time working with text files 
- the source code for most programs are just text files.
So these clever programmers have made lots of tools that make manipulating text files much more pleasant.
I want to take this combination of effort, and use it to make my life easier.
"Standing on the shoulders of giants", as Newton `put it`_.

.. _`put it`: http://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants

Another advantage is that I can use the same tools for almost everything.
I can use the same set of text manipulation tools to access my data,
prepare my data,
do some processing and even do things like present my findings or document my analysis.
Using the same set of tools for all your work means you become an expert in your tools much more quickly,
making it frictionless to move from one stage of your analysis to the next stage.
You don't have to change mental mode from "working in SQL Server" mode to "working in Excel" mode.
You can re-use the clever tricks from one stage of your analysis in the other stages of your analysis.

As so much of my current workflow is based on working with text files,
it becomes much easier to integrate new tools into my workflow.
I don't have to worry too much about the compatibility of different tools,
because all of my favourite tools will consume and produce text files.

Hopefully I've convinced you that I'm not just being awkward,
that I personally find text based tools much more pleasant to work with.
Here are some of those clever tools I was talking about:

----

Text editors
------------

There are lots of really good text editors.
Personally, I really like ``vim``, but there are plenty of other excellent_ editors_ out there.

Any good text editor should make writing and editing text files a real pleasure.
A good text editor will become an easy way to express your ideas in a useful way;
whether it is writing a few scribbled notes, a well thought out document or writing a program.

.. _excellent: http://www.gnu.org/software/emacs/
.. _editors: http://www.sublimetext.com/

Unix tools
----------

There is an idea in Unix that `everything is a file`_:
you can access your documents, hard drives, displays, network devices all in the same way you would access a text file.
This means that there are lots of useful Unix tools for working with text files.
Tools like grep_, awk_, sed_ and head_ are very handy to know.
I also found this `list of Unix text processing commands`_.
It seems a comprehensive resource.

.. _`everything is a file`: http://en.wikipedia.org/wiki/Everything_is_a_file
.. _grep: http://www.uccs.edu/~ahitchco/grep/
.. _awk: http://www.grymoire.com/Unix/Awk.html
.. _sed: http://www.grymoire.com/Unix/Sed.html
.. _head: http://linux.101hacks.com/unix/head/
.. _`list of Unix text processing commands`: http://tldp.org/LDP/abs/html/textproc.html

The real power of these commands comes from the `piping mechanism`_ that is part of Unix.
These let you redirect the output from commands into other commands, 
or redirect the output from commands into text files.

For example, this command looks for all the things I've marked as TODO in my python scripts and writes them to a single text file.
It takes the contents of all the python files in the current directory (``cat *.py``),
then redirects these contents to ``grep "TODO"``, which filters out only the rows that contain the string "TODO".
Then these rows that contain "TODO" are put out to a file called `tasks.txt`.

.. sourcecode:: console

    cat *.py | grep "TODO" > tasks.txt



.. _`piping mechanism`: http://www.ibm.com/developerworks/linux/library/l-lpic1-v3-103-4/

Modern tools
------------

As well as these Unix tools,
there are also more recent additions to the text processing workflow.
Here is a selection of some of my favourites.

Github
______

Github works incredibly well with text files.
It shows you which rows of the text file have changed between different versions,
and lets you comment on individual lines.
They use markdown_ files heavily, 
a type of plain text file,
for documentation.

You can upload non-text files to github,
but it means you miss out on some nice features.

.. _markdown: http://daringfireball.net/projects/markdown/

Jinja2
______

jinja2_ is another tool that works really well with text files.
It lets you write a template text file,
then fill in the gaps by passing data to the template.
A bit like a standard letter in word processing software
("Dear <XXXX>, You owe us <YYYY>, please pay soon.")
if you've used those.

Templates are usually used to make HTML documents,
but they could be used to make things like dynamic data driven reports.

.. _jinja2: http://jinja.pocoo.org/docs/


Wok
___

wok_ makes static websites from text files.
I use it to make this blog.
There are lots of other static website generators around.
I chose wok as it is very flexible,
I want to try using it to create other types of output - not just websites.

.. _wok: http://wok.mythmon.com/

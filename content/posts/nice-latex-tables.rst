title: Nice LaTeX tables
date: 2014-05-03
tags: latex
---

Here I'm collecting together my notes on how to make nice, readable LaTeX tables.

Overall notes
-------------

 * Use the booktabs_ package.

 * Read the `booktabs documentation`_. Opinionated documentation with a few very good guidelines.

 * Read `Typesetting tables with LaTeX`_, which explains many of the strange looking things you have to do to get a nice table.

 * Use ``@{}`` in your column headings.

 * Don't use vertical lines to separate the columns in the tables.

 * Put in the minimum number of horizontal lines to make your table legible. Use the horizontal lines the `booktabs` package gives you.

 * Prefer whitespace to horizontal lines where it makes sense.

 * Use the siunitx_ package to align numbers. Use left alignment for everything else.


I go into more detail on these points below.

.. _booktabs: http://www.ctan.org/pkg/booktabs

.. _`booktabs documentation`: http://mirror.ox.ac.uk/sites/ctan.org/macros/latex/contrib/booktabs/booktabs.pdf

.. _`Typesetting tables with LaTeX` : http://www.tug.org/TUGboat/tb28-3/tb90hoeppner.pdf

.. _siunitx : ftp://ftp.tex.ac.uk/ctan%3A/macros/latex/exptl/siunitx/siunitx.pdf

Use ``@{}`` in column heading definitions
_________________________________________

Putting the ``@`` sign in your column heading definitions tells LaTex that you want to replace the space between those columns with something else.

The following code

.. sourcecode:: latex

    \begin{tabular}{lll}
    $\alpha$ & $1$ & a\\
    $\beta$ & $2$ & b\\
    $\gamma$ & $3$ & c\\
    \end{tabular}

Makes this table.

.. image:: /img/latex-tables/normal_table.png
    :width: 200px


If I use the ``@`` commands, I can change the column separators to anything I like.
In this case I'll make them commas (for whatever reason).


.. sourcecode:: latex

    \begin{tabular}{l@{,}l@{,}l}
    $\alpha$ & $1$ & a\\
    $\beta$ & $2$ & b\\
    $\gamma$ & $3$ & c\\
    \end{tabular}

makes this table.

.. image:: /img/latex-tables/comma_table.png
    :width: 200px


The most common reason for doing this is to remove leading and trailing whitespace from your table columns.
The only difference between the following two tables is that the second one has ``@{}`` before the first column and after the last column.
Note the different amount of whitespace around the two tables.

.. image:: /img/latex-tables/table_alignment.png

Lines and whitespace
____________________

The temptation with LaTeX tables is to put in lots of gridlines to make the table stand out.

.. sourcecode:: latex

    \begin{table}[h]
    \begin{tabular}{@{}|l|l|r|@{}}
    \hline
    \textbf{Country}        & \textbf{First-level country subdivision}  & \textbf{GDP}     \\
    \hline
    United States  & California                       & 2003479 \\
    United States  & Texas                            & 1397369 \\
    United States  & New York                         & 1205930 \\
    United States  & Florida                          & 777164  \\
    \hline
    China          & Guangdong                        & 1003746 \\
    China          & Shandong                         & 882973  \\
    China          & Jiangsu                          & 55270   \\
    \hline
    United Kingdom & England                          & 1998493 \\
    \hline
    Japan          & Tokyo                            & 930000  \\
    \hline
    France         & IDF Paris Region (Ile-de-France) & 845195 \\
    \hline
    \end{tabular}
    \end{table}

Creates a table a table like this.

.. image:: /img/latex-tables/lines_table.png

I prefer more minimal tables,
which conentrate on the data.
Maximising the `data ink ratio`_, as Edward Tufte would put it.

.. _`data ink ratio`: http://www.infovis-wiki.net/index.php/Data-Ink_Ratio

I've taken the following steps.

 1. Remove all vertical lines

 2. Remove all horizontal lines, except for the one between the headers and the data

 3. Replace the ``\hline`` between groups with ``\addlinespace``. This is something that the ``booktabs`` package gives you, which places whitespace between lines.

 4. Remove the bolding from the headings

 5. Remove duplicate row titles


.. sourcecode:: latex

    \begin{table}[h]
    \begin{tabular}{@{}llr@{}}

    Country        & First-level country subdivision  & GDP     \\
    \midrule
    United States  & California                       & 2003479 \\
                   & Texas                            & 1397369 \\
                   & New York                         & 1205930 \\
                   & Florida                          & 777164  \\
    \addlinespace
    China          & Guangdong                        & 1003746 \\
                   & Shandong                         & 882973  \\
                   & Jiangsu                          & 55270   \\
    \addlinespace
    United Kingdom & England                          & 1998493 \\
    \addlinespace
    Japan          & Tokyo                            & 930000  \\
    \addlinespace
    France         & IDF Paris Region (Ile-de-France) & 845195 \\
    \end{tabular}
    \end{table}

Gives a table like this one:

.. image:: /img/latex-tables/nolinetable.png

Much nicer in my opinion.

Use ``siunitx`` for numeric alignment
_____________________________________

The final thing that I do is use the ``siunitx`` package to align my numbers in tables.
It provides a new option for the column headings -- ``S`` -- which you use instead of l, r, c to align numeric values.
The reason for doing this is that it lines up all the decimal places and deals equally well with very large and very small numbers.

If you want to tell the package to ignore any fields, put the field in curly brackets (``{}``).
This is useful for column headings.

.. sourcecode:: latex

    \begin{table}[h]
    \begin{tabular}{@{}llS@{}}

    % note the headings are in curly brackets
    {Country}        & {Category}  & {Number}     \\
    \midrule
    United States  & $\alpha$                       & 91.2 \% \\
                   & $\delta$                       & 0.3020 \\
                   & $\gamma$                       & 1205930 \\
                   & $\sigma$                       & 1.4\%  \\
    \end{tabular}
    \end{table}

Gives a table like this one,
where all the numbers are correctly aligned.

.. image:: /img/latex-tables/aligned_numbers.png

``siunitx`` provides a lot more functionality than this,
dealing with scientific notation and units.
I've not had to learn about that side of things yet.

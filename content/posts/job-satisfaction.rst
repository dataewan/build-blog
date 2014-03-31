title: Job Satisfaction in the UK
date: 2014-03-30
scripts:
    - axeschart.js
    - job_satisfaction.js
---

I saw a recent article on the BBC_ about job satisfaction in the UK.
The `cabinet office`_ did a bit of research finding the occupations with the highest job satisfaction in the UK.
The job with highest satisfaction is the clergy,
the least satisfying job is being a manager or owner of a pub.

.. _BBC: http://www.bbc.co.uk/news/magazine-26671221
.. _`cabinet office`: https://www.gov.uk/government/organisations/cabinet-office

Here are the occupations plotted against the median salary for the occupation.

.. raw:: html

    <div id="unmodified_plot" class="plot">
    </div>

Hover over the points to see what occupation each point represents.

You can see *Clergy* right up there at the top.
*Publicans and managers of licenced premises* right down at the bottom,
closely followed by *Elementary construction occupations*.

There is a fairly clear relationship between income and job satisfaction.
The lower paid jobs tend to have lower satisfaction scores,
while the highest paid jobs have higher satisfaction scores.

Income isn't everything when it comes to job satisfaction,
having a highly paid job doesn't guarantee satisfaction.
It certainly seems to help though.
The highest paid jobs tend to have high job satisfaction scores as well.

Here are the top 10 most satisfying jobs.
7 out of the 10 are above the median income in the UK (25k).

=============================================================  =========  ==============
Occupation                                                     Income       Satisfaction
=============================================================  =========  ==============
Clergy                                                          20,568             8.291
Chief executives and senior officials                          117,700             7.957
Managers and proprietors in agriculture and horticulture        31,721             7.946
Company secretaries                                             18,176             7.930
Quality assurance and regulatory professionals                  42,898             7.891
Health care practice managers                                   31,267             7.843
Medical practitioners                                           70,648             7.836
Farmers                                                         24,520             7.808
Hotel and accommodation managers and proprietors                32,470             7.795
Skilled metal, electrical and electronic trades supervisors     35,316             7.795
=============================================================  =========  ==============

Here are the bottom 10 most satisfying jobs.
Only one of these jobs is above the median income.

=============================================  =========  ==============
Occupation                                     Income       Satisfaction
=============================================  =========  ==============
Plastics process operatives                     21,066             6.722
Bar staff                                        7,317             6.686
Care escorts                                     7,343             6.614
Sports and leisure assistants                   11,651             6.607
Telephone salespersons                          17,362             6.605
Floorers and wall tilers                        23,547             6.571
Industrial cleaning process occupations         15,241             6.563
Debt, rent and other cash collectors            17,371             6.561
Elementary construction occupations             20,910             6.389
Publicans and managers of licensed premises     25,222             6.380
=============================================  =========  ==============

This means that just looking at job satisfaction doesn't tell you an awful lot.  
A lot of the effect of satisfaction can be explained by the income of a job.

.. figure:: /img/overall_plot.png

    Showing the relationship between income and satisfaction.
    Overlaying a quadratic best fit line.

The plot above shows the relationship between income and satisfaction,
the best fit line shows the expected satisfaction for a given income.

It is more interesting to plot the distance between each point and this best fit line.
This removes the effect of income on satisfaction and lets you compare low and high paid jobs on an even playing field.
That is what this plot shows.

.. raw:: html

    <div id="adjusted_plot" class="plot">
    </div>

You now see that some of the low paying jobs aren't as unsatisfying as they previously appeared.
You also see that some of the highly paid jobs don't appear as satisfying as they previously did.
Now we see that *Legal Professionals* are perhaps highly paid to make up for the lack of satisfaction in that vocation.

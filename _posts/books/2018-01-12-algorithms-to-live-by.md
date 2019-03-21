---
layout: book
title:  "Algorithms to Live By"
author: "Brian Christian, Tom Griffiths"
categories: book
img: "https://images-na.ssl-images-amazon.com/images/I/41UiFPQfFbL._SX326_BO1,204,203,200_.jpg"
ratings: ★★★★★
---

[![book cover](https://images-na.ssl-images-amazon.com/images/I/41UiFPQfFbL._SX326_BO1,204,203,200_.jpg)](https://amzn.to/2PJ3g4T)
{: .book-cover}

I discovered this book from one podcast long long time ago.(maybe from Hidden Brain?)
It helped me with understanding fundamental of CS and gave me the courage and insights towards the unknown future of myself.

---

Exploration in itself has value, since trying new things increases our chances of finding the best. So taking the future into account, rather than focusing just on the present, drives us toward novelty.

.

**“To try and fail is at least to learn; to fail to try is to suffer the inestimable loss of what might have been.”**

.


The framework I found, which made the decision incredibly easy, was what I called—which only a nerd would call—a “regret minimization framework.” So I wanted to project myself forward to age 80 and say, “Okay, now I’m looking back on my life. I want to have minimized the number of regrets I have.” I knew that when I was 80 I was not going to regret having tried this. I was not going to regret trying to participate in this thing called the Internet that I thought was going to be a really big deal. I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not ever having tried. I knew that that would haunt me every day, and so, when I thought about it that way it was an incredibly easy decision.


.

Computer science can’t offer you a life with no regret. But it can, potentially, offer you just what Bezos was looking for: *a life with minimal regret.*


---


By the 1960s, one study estimated that more than a quarter of the computing resources of the world were being spent on sorting.

.

And no wonder—sorting is essential to working with almost any kind of information. Whether it’s finding the largest or the smallest, the most common or the rarest, tallying, indexing, flagging duplicates, or just plain looking for the thing

.

sorting is also key to the human experience of information.

.

The truncated top of an immense, sorted list is in many ways the universal user interface.


.

all about minimizing the number of things we have to sort.

.


Big-O notation provides a way to talk about the kind of relationship that holds between the size of the problem and the program’s running time.

.

Obama was right to eschew Bubble Sort, an algorithm which has become something of a punching bag for computer science students: it’s simple, it’s intuitive, and it’s extremely inefficient.

.

This is Bubble Sort, and it lands us in quadratic time.

.

“Mergesort is as important in the history of sorting as sorting in the history of computing.”

.

The books going through its system are sorted in O(n)—linear time. In an important sense, the O(n log n) linearithmic time offered by Mergesort is truly the best we can hope to achieve. It’s been proven that if we want to fully sort n items via a series of head-to-head comparisons, there’s just no way to compare them any fewer than O(n log n) times.

.

sometimes you don’t need a fully ordered set—and sometimes sorting can be done without any item-to-item comparisons.

.


We’ve already seen this in the tensions between looking and leaping, between exploring and exploiting. And one of the most central tradeoffs is between sorting and searching.

.

Sorting something that you will never search is a complete waste; searching something you never sorted is merely inefficient.

.

Sorting something that you will never search is a complete waste; searching something you never sorted is merely inefficient.

.

If you’re Google, you are almost certain that (a) your data will be searched, (b) it will be searched not just once but repeatedly, and (c) the time needed to sort is somehow “less valuable” than the time needed to search. (Here, sorting is done by machines ahead of time, before the results are needed, and searching is done by users for whom time is of the essence.) All of these factors point in favor of tremendous up-front sorting, which is indeed what Google and its fellow search engines do.

.

email inbox almost certainly is—and it’s another domain where searching beats sorting handily.

.

As the cost of searching drops, sorting becomes less valuable.

.

Leaving something unsorted might be thought of as an act of procrastination—passing the buck to one’s future self, who’ll have to pay off with interest what we chose not to pay up front. But the whole story is subtler than that. Sometimes mess is more than just the easy choice. It’s the optimal choice.

.


The search-sort tradeoff suggests that it’s often more efficient to leave a mess. Saving time isn’t the only reason we sort things, though: sometimes producing a final order is an end in itself. And nowhere is that clearer than on the sporting field.

.

But there’s also a deeper insight in Dodgson’s logic. We humans sort more than our data, more than our possessions. We sort ourselves.

.

Round-Robin format, where each of n teams eventually plays every one of the other n − 1 teams. While arguably the most comprehensive, it’s also one of the most laborious.

.

Perhaps the most prevalent tournament format, however, is a bracket tournament—as in the famous NCAA basketball “March Madness,

.

time—O(n log n)—and so, given that there are 64 teams, we can expect to only need something like 6 rounds (192 games), rather than the whopping 63 rounds (2,016 games)

.

As Trick points out, sports leagues aren’t concerned with determining the rankings as quickly and expeditiously as possible. Instead, sports calendars are explicitly designed to maintain tension throughout the season, something that has rarely been a concern of sorting theory.

.

In computer science unnecessary comparisons are always bad, a waste of time and effort. But in sports that’s far from the case. In many respects, after all, the games themselves are the point.

.

Comparison Counting Sort. In this algorithm, each item is compared to all the others, generating a tally of how many items it is bigger than.

.

Displacement happens when an animal uses its knowledge of the hierarchy to determine that a particular confrontation simply isn’t worth

.

Though we may cringe when we see creatures turning their claws and beaks on each other, biologists tend to think of pecking orders as the violence that preempts violence.

.

The creation of a pecking order is a pugilistic solution to a fundamentally computational problem.


---


In the practical use of our intellect, **forgetting is as important a function as remembering.**

.

computer scientists have grappled with the dual problems of what to keep and how to arrange it.

.

In computing, this idea of a “memory hierarchy” remained just a theory until the development in 1962 of a supercomputer in Manchester, England, called Atlas

.

Wilkes’s proposal was implemented in the IBM 360/85 supercomputer later in the 1960s, where it acquired the name of the “cache

.

**These algorithms are known as “replacement policies” or “eviction policies,” or simply as caching algorithms.**

.

As it explains, the goal of cache management is to minimize the number of times you can’t find what you’re looking for in the cache and must go to the slower main memory to find it; these are known as “page faults” or “cache

.

Another simple strategy is First-In, First-Out (FIFO), where you evict or overwrite whatever has been sitting in the cache the longest (as in Martha Stewart’s question “How long have I had it?”).

.


third approach is Least Recently Used (LRU): evicting the item that’s gone the longest untouched

.

program that you haven’t been using for the longest time is also probably the one that won’t be used for some time to come.

.

The literature on eviction policies goes about as deep as one can imagine—

.

The reality is that the Internet is all about bundles of physical wires and racks of metal. And it’s much more closely tied to geography than you might expect.

.

“content distribution networks” (CDNs), which have computers around the world that maintain copies of popular websites. This allows users requesting those pages to get their data from a computer that’s nearby, without having to make the long haul across continents to the original server.

.


Caching is just as useful when it’s proximity,

.

Amazon was granted a patent for an innovation that pushes this principle one step further. The patent talks about “anticipatory package shipping,”

.

First, when you are deciding what to keep and what to throw away, LRU is potentially a good principle to use—much better than FIFO. You shouldn’t necessarily toss that T-shirt from college if you still wear it every now and then. But the plaid pants you haven’t worn in ages? Those can be somebody else’s thrift-store bonanza.

.

A final insight, which hasn’t yet made it into guides on closet organization, is that of the multi-level memory hierarchy. Having a cache is efficient, but having multiple levels of caches—from smallest and fastest to largest and slowest—can be even better.

.

“that a very fundamental principle in my method is not to group files according to content.”

.

because returning every file to the left side was just easier than trying to reinsert it at the same spot it came from. Only gradually did he realize that this procedure was not only simple but also startlingly efficient.


.

LRU tells us that when we add something to our cache we should discard the oldest item—

.

Tossing things back on the top of the pile is the very best you can do, shy of knowing the future.
.


According to his theory, the mind has essentially infinite capacity for memories, but we have only a finite amount of time in which to search for them.

.

You can fit as many items as you want on that shelf, but the closer something is to the front the faster it will be to find. The key to a good human memory then becomes the same as the key to a good computer cache: predicting which items are most likely to be wanted in the future.

.

No matter how good your organization scheme is, having to search through more things will inevitably take longer. **It’s not that we’re forgetting; it’s that we’re remembering. We’re becoming archives.**

.

So as you age, and begin to experience these sporadic latencies, take heart: the length of a delay is partly an indicator of the extent of your experience. The effort of retrieval is a testament to how much you know. And the rarity of those lags is a testament to how well you’ve arranged it: keeping the most important things closest to hand.

.

**“We are what we repeatedly do,”**

.

“there’s nothing so fatiguing as the eternal hanging on of an uncompleted task,” but Frank Partnoy, in Wait, makes the case for deliberately not doing things right away. Every guru has a different system, and it’s hard to know who to listen to.

.

start with the lightest wash, end with the smallest hamper.

.

*the best strategy is to start with the task due soonest and work your way toward the task due last. This strategy, known as Earliest Due Date,*

.

Moore’s Algorithm says that we start out just like with Earliest Due Date—by scheduling out our produce in order of spoilage date, earliest first, one item at a time.

.

Do the difficult things while they are easy and do the great things while they are small.

.

Minimizing the sum of completion times leads to a very simple optimal algorithm called Shortest Processing Time: always do the quickest task you can.

.

If each piece of unfinished business is like a thorn in your side, then racing through the easiest items may bring some measure of relief.

.

only prioritize a task that takes twice as long if it’s twice as important.

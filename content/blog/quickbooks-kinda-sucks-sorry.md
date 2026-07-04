---
title: "QuickBooks kinda sucks, I'm sorry"
description: "Learn my frustration against using this platform."
date: "2026-07-03"
song: "48uGoiIxeowT0xncdPPcJM"
---

The song is so fitting for this whole debacle.

So, how easy do you think setting up Stripe sync with QuickBooks is? Not quite as you might think, and not necessarily for the right reasons.

The last few weeks I have been working on a Stripe automation so invoices are sent automatically for a client which I will not name. What they do use though is QuickBooks. One of the requirements is to sync the information from Stripe into QuickBooks.

Simple enough, use the connector, test it out, sync and then tell the client to install it on their own QuickBooks account.

Well not really. Setting it up has been more frustrating than anything, honestly.

## The beginning of the annoyance

So I tried setting up a normal account with a free trial. Alright, no biggie there. When I try to set up the connector, it says that Stripe is not available for your region. It automatically enrolled me into the Colombia region rather than the client's country. Okay, I just change the account's region, right? Right?...

Wrong. This can't be done lol. Only on account creation, and you don't get a choice HAHA!

Okay. I try to recreate the account using Mozilla's VPN. Do you think that worked?

Lmao no. Blocks the signup process.

## Frustration

Researching on the web, I come across that it is possible to create a developer account with a sandbox. Perfect, sounds exactly like what I need.

I create a developer account, which requires you to create a company sandbox. Nothing strange there.

Setting it up is easy, and I was able to do it in the target region. Awesome, now lets setup the Stripe connector!

When I click to add the connector into QuickBooks, nothing happens. The setup just closes. No error is thrown in the console, no error is thrown in the network. Can't set it up from Stripe either.

I test out another integration to be sure, especifically the Wix integration, and that works fine.

Looks like a bug, right? No feedback is sent to the user on what happens. Lets open a support ticket.

I open a support ticket with this exact same issue. The response I get, after a day, is that "hey, you must be in the builder tier to get support. Open a new question in the developer forum".

Okay fine, whatever, though it might be on your best interest to give support to a developer that is working on integrating something for an existing client, but whatever.

I open the question in QuickBooks developer forum. A day passes, and the response I get is that the connector is available only for real accounts, not for developer sandboxes.

What? Then what is the point of the developer sandbox if I can't test something before adding it into a real account???

The worst part is, the page of the connector does not mention that you must be on a real account to add it.

## So... what's the takeaway?

Error feedback for users is important, this would've definitely saved me some hoops that I tried to run around. Even a small error in a toast, but let the user know what happened so they have a call to action (what to do). If I was another type of person, I would've just told my client that QuickBooks doesn't work, and left it there.

Another thing that was interesting to note is that documentation is important. Why isn't this documented in the page of the connector?

In the world of AI, adding a small note couldn't cost more than 0.000001 cents, why isn't that done yet?

Also, putting weird limitations like this Stripe connector behind a paywall, which is something you would TRY first before adding into your real account.

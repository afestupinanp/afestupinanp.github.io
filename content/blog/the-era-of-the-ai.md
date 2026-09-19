---
title: "The era of the AI: how I saw it evolve"
description: "A blog post on how the AI changed the way I work and how I adapted."
date: "2026-09-19"
song: "5XFoaqV1Z8XaLJidchVWhh"
---

Where were you when ChatGPT dropped? Honest question.

## Some initial context (haha)

For me, it was on the late part of 2022. I was still working in the Universidad Santiago de Cali. One of my coworkers was interacting with this page called ChatGPT, he found out he could interact with the page and the AI would respond to the needs he had. Albeit extremely slow.

The first test we ran on it was if it could sort a JSON by its values, and then run some translations for implementing a small fix in the datatables included localization. The result was okay, but it was extremely slow, it took around 5 minutes to give a proper answer to us.

I didn't give it much attention at the time. I was working on quite some other important things and the tech was very, VERY slow. What I didn't know was that the way of doing things was going to change, drastically.

In 2023, we had Google Bard (aka Google Gemini nowadays). My first tests with it, I had a reaction like "wow this thing is kinda stupid" haha. Once again, a full year went by for me without giving too much attention, but at the time, code suggestions were already becoming a thing.

2024 rolls around, when I started working by Priverion that I started to see things changing. We had code suggestions and autocomplete with Copilot as part of the resources that they gave for us at the time. I didn't use them much honestly, because finding the issues and writing some code that made sense for it was still quicker for me. However, a small test internally ran to generate code with it, and probably was the first interaction I saw with the proper agent workflow that is, at the time of writing, very popular.

2025 comes by, I start working at Leanware, and they were pretty early adopters in the AI agent workflow, and they actively encouraged me to start using these AI tools. While I was kinda surprised with how it worked, I still was a bit hesitant to fully develop with AI. Especially because I was assigned in a project where the code was extremely fragile, so my uses of it were sparse.

## My adaptation

I did start to use the tools I had at my disposal and my output, which was already high enough, exploded. I felt like my productivity increased majorly. Now, this comes with a heavy warning, which I'm going to explain in the next section.

Since I already had some years of working experience without AI tools, this just felt like a major productivity booster, while also keeping the code clean and maintaineable.

Granted, you still need every now and then verify what has changed in the AI world. Nothing is ever static, it's like when JavaScript had a new framework every couple of months pre and during the pandemic era.

In my case, my workflow starts by having one thing EXTREMELY clear: what do I need to do, what should I expect by the end of the AI-assisted development, and THROUGH testing. This last bit is quite important, for my vibe coding friends. You have to really test what the AI implemented, think and verify edge cases, review the code for strange patterns and other issues, KISS, SOLID and yadda yadda.

Basically, the AI does the tedious work of coding, while I takeover high-level implementation details, keeping sure the model doesn't step out of line, and flagging wherever it does.

## My take on the AI-assisted development workflows

Not sure if you've read <a target="_blank" rel="noreferrer noopener" href="https://www.phoronix.com/news/Linux-Is-Not-Anti-AI">what Linus Torvalds has said regarding AI-enhanced development.</a> Give it a read if you haven't, but summarizing, he mentions that it is a very useful tool, and questioning its usefulness, at this point, is not realistic. My take on this, is that developers are still 100% responsible of the code that they submit into the production pipeline. Developers are still 100% responsible of understanding what the code does, and that it behaves appropiately.

That was the case before, when people were doing copy-pasting from Stack Overflow, and it still should be. If you can't fully explain what the code does, then are you really understanding what you do at that point?

At least on software development, AI tools are extremely helpful, and adapting while you can will be important. Granted, you still need to know the fundamentals before you take and work with AI tools, or you won't understand a thing (which is what happens with vibe coders). In my opinion, the fundamentals are now important than they ever were, given that you need to do a code review on what the AI spits.

This quote is now more important than ever. If you ever published production code, you will know that making the wrong decision makes you accountable. Never the AI will be accountable of anything.

<img src="/assets/blog/a-computer-can-never-be-held-accountable.jpg" />

Just for the record, also these blog posts are 100% written by me :), I don't need AI to express my thoughts.
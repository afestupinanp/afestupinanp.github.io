---
title: "The morning of PHP2Shell and Murphy's Law"
description: "A blog post on how the morning of October 21st 2026 went with PHP2Shell, and how some other services completely failed."
date: "2026-10-24"
song: "4t60HQl6Mioy70TaPgZT5E"
---

I think everyone in software engineering has heard about [Murphy's Law:](https://en.wikipedia.org/wiki/Murphy%27s_law)

> Anything that can go wrong, will go wrong.

Well, if you have a similar setup to what I had to patch on that day, you may have seen it.

## The leaked disclosure

On the night of Tuesday October 20th 2026, I was scrolling on Twitter and found out about these 2 particular CVEs: CVE-2026-109618 & CVE-2026-109619. Both of these CVEs were initially stated to be a 10.0 rating in the CVSS, as it allowed unauthenticated Remote Code Execution (RCE) via out of memory or global state across state requests.

It was initially a rumor, but then the PHP Team confirmed it during the evening, promising a patch for October 21st 04:00 pm UTC..

This vulnerability was named as [PHP2Shell.](https://www.php2shell.com/) While I'm not here to talk about specifics about the attack, I'm here to talk about what other things that failed that day.

I was already talking with the QA engineer on that night (obviously on a personal channel, and while also sending some memes haha) when I mentioned to him that we'd have to update as soon as it is released.

What I was seeing on Twitter was a bit scary, so I got up early next day and sent an email to my client, as they also managed another PHP application that the company I worked on didn't maintain, to suggest that they should upgrade as soon as possible.

## The next morning

So, October 21st. I sent the email I mentioned, then I waited until the patch version was released by the PHP Team. The details about the issue were a bit messy, as some workarounds were mentioned the night before to mitigate it, but nothing was really confirmed. So... we waited until 9 am (UTC-5) for the patched version to be released.

Right on time, the PHP Team published the patched versions on the website, and the public disclosure in GitHub Security Advisory went out 30 minutes earlier (which I personally think it's a bit strange).

It all seemed okay, until it wasn't...

#### GitHub Actions being down

Having 100% uptime these days on GitHub seems kind of a miracle but as per usual, GitHub Actions was down, right on queue for the update. You may think that this would only affect the project, which would be okay, but this is way worse.

Docker Hub publishes the official images through GitHub - check this pull request: https://github.com/docker-library/php/pull/1694. Quite a few things happened with this:

1. People were really angsty to get this patched, so a lot of eyes were on that pipeline to be fully completed and the pull request to be merged.
2. The pipeline took forever because GitHub Actions was down and acting funky. There are also two pipelines: one for generating the official images and another one in https://github.com/docker-library/official-images/pull/22541 to officially publish them through Docker Hub.
3. The maintainers locked the conversation on the first PR as it had a lot of comments.
4. The maintainers took quite a bit to approve the first PR. I would assume also given that they didn't receive the patched version from the PHP Team a bit earlier, they had to run some checks before.

Number three created one problem though: it made a step of the pipeline fail, as it posts a comment into the pull request lol. So it required a re run.

So, 1 hour 30 mins later than the published time, the images were already being sent out, but something was wrong.

#### Docker Hub Web UI being down & empty images

For some reason, Docker Hub Web UI was also down that day, though not too long. I tried to check on Docker Hub before going to their GitHub (because I thought they would've received the patched versions already) so that's how I knew it was down. It was extremely slow.

After a bit, the website recovered and worked as it normally would've. Then, after 1 hour 30 mins after the pipelines already ran, the official images were rolling out, but something was wrong...

The manifest for the images didn't exist. If you tried for example to pull the patched version, it would throw a 404. Somehow, nobody was creating an issue for that, so I had to report it through https://github.com/docker-library/official-images/issues/22546 - after I created it, a few other issues in that repo started to pop out about the same problem.

Turns out, the image tags went out but the manifest was not rolled out, so if you tried to pull linux/amd64, it would fail.

Around 40 mins later, the issue was closed and was labelled as a deploy glitch. During that, I was already beginning to switch to a base Ubuntu image and install PHP myself via Ondrej's PPA, but this was fixed so I just reverted back to the original official version.

#### In summary

An issue that was simply changing the version number on the Dockerfile that we use for our project and should've taken 10 mins at most, now became a 3 hour run.

There's quite a few things wrong that happened here:

1. The PHP Team should've started rolling out the versions earlier. I know I know, the public disclosure was scheduled at that time, but if you checked on Twitter that day anyway, someone had already leaked the PoC (whether it was a working one or not)
2. The PHP Team should've sent the versions early for Docker Images to start updating, or for vendors to start patching ahead of time.
3. Why does Docker's PHP official image repo have a mandatory step for commenting into the PR? lol.



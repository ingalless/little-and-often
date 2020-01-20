---
title: Write. Tests. Now.
date: "2020-01-20T22:12:03.284Z"
description: "Tests won't write themselves. Write them now or forever regret it."
---

"I can't add tests to this app. It's not got a test suite yet. The code isn't written in units. I can't mock out the database".

These are several concerns I voiced in my head looking at a legacy PHP application. It was a minefield of functions and `include` statements. A variable would thread through several files. "I can't possibly write tests for this" I told my self.

I was wrong. And so are you.

## Where to start?

In my case, I started with bugs. When a bug was reported I took the time to add a test then fix the bug. This has a few great benefits
1. You're forced to add some rudimentary testing harnesses
2. You prove the bug actually exists
3. The bug has already been understood before commencing work
4. The bug is documented via a test. Future developers are thus forced to keep it fixed.
5. You've added the first test to the application!

The guiding principle in any software project is the [Boy Scouts rule][1]. In short this rule dictates that the code should always be checked in *a little* bit better than it was checked out. Not perfection. Just a little better.

The key as with many things is to just get started. Having a test will move the codebase in a good direction.

[1]: <https://97-things-every-x-should-know.gitbooks.io/97-things-every-programmer-should-know/content/en/thing_08/> "Boy Scouts Rule"

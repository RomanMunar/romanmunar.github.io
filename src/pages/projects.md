---
title: Projects
description: Roman Munar's projects
updatedAt: 2022-04-04
layout: "../components/Pages/ProjectsContentLayout.astro"
---

Hey there I'm Roman Munar a self-taught developer and these are a few of my side-projects. I have a more detailed writing about me on my [About/Work Page](/work)

### Prioritizer

<figure>
    <img src="/images/dist/project_prioritizer.webp" alt="Prioritizer app" />
    <figcaption>No actual images for Prioritizer yet.</figcaption>
</figure>

<p class="lead">Tabbed kanban boards with recurring tasks and a dashboard for tracking your progress.</p>

The main idea here is to encourage doing more of the things that makes you _feel good_. It aims to make you prioritize the things that keeps you sane by tracking your progress and lessen the friction between relying on your willpower and walking the walk.

A 2nd goal of Prioritizer is to simply be a customizable kanban board with metadatas in place to organize things. It's hard to explain it but, basically it will function like [ClickUp](https://clickup.com) for areas of your life e.g. House, Exercise, Job Hunt, etc.

I'm currently working on this project. I'll make sure to update this page after I make it public.

### Secret Boxes w/ SCGFoundation

<figure>
    <div class="h-[400px] gap-4 overflow-auto scrollable">
        <img src="/images/dist/project_secret-boxes-1.webp" alt="Secret Boxes app image" />
        <img src="/images/dist/project_secret-boxes-2.webp" alt="Secret Boxes app image" />
    </div>
    <figcaption>Secret boxes a documentation for the scrt platform.</figcaption>
</figure>

<figure>
<div class="h-[400px] gap-4 overflow-auto scrollable">

![SCGFoundation landing page](/images/dist/project_scg-foundation-1.webp)
![SCGFoundation mobile landing page](/images/dist/project_scg-foundation-2.webp)

</div><figcaption>Shopee Compare an shopee app for comparing and bookmarking products on shopee.</figcaption>
</figure>

[Link for Secret Boxes](http://secret-boxes.vercel.app/)
[Link for SCGFoundation](https://scg-foundation.vercel.app/)

<p class="lead">Secret Box onboards developers to build on the secret network platform, a blockchain platform for web 3.</p>
<p class="lead">SCG Foundation basically take on projects within the secret network. Made of the same team building the secret box</p>

On this project we used [ClickUp](https://clickup.com) as our project management app and Discord for chatting. I'm the sole developer on team. My main resposibility was to implement hand-out screens made by our designers using figma. I decided to use `NextJS`, `TailwindCSS`, and `MDX` for this project. NextJS was the only _good_ option for server side rendering in the React ecosystem at the time, Tailwind CSS to replicate the design system we have from figma. I also got to use their `HeadlessUI` library for modals, menus, and selects which made animations _`easy, and fun`_. MDX fits our use case very well, It allowed us to have our own custom components like tables, image previews, etc. within our markdown files.

More things I did:

- Wrote a `zx` script to optimize and convert images to webp during build time.
- Helped the team with the copy writing of the contents.
- Helped build the UI design for the mobile navigation.

### Shopee Compare

<figure>
<div class="h-[400px] gap-4 overflow-auto scrollable">

![SCGFoundation search results page](/images/dist/project_shopee-compare-1.webp)
![SCGFoundation compare page](/images/dist/project_shopee-compare-2.webp)
![SCGFoundation bookmarks page](/images/dist/project_shopee-compare-3.webp)

</div><figcaption>Shopee Compare an app for comparing and bookmarking products on shopee.</figcaption>
</figure>

[Link for Shopee Compare App](https://shopeeonsteroids.vercel.app/)

This is a personal project that me and my friends use for browsing, bookmarking, and sharing collection of products from shopee.

### Filta Redesign

<figure>
<div class="h-[400px] gap-4 overflow-auto scrollable">

![Filta redesign home page](/images/dist/project_filta-redesign-1.webp)
![Filta redesign careers page](/images/dist/project_filta-redesign-2.webp)
![Filta redesign mobile home page](/images/dist/project_filta-redesign-3.webp)

</div><figcaption>A redesigned version of Filta's homepage.</figcaption>
</figure>

[Link for Filta Redesign](https://filta-redesign.netlify.app/)

<p class="lead">This is one of the first projects I've worked on. I really liked how this project turned out. I was surprised by the positive feedback. It's not as impressive as my other projects but it defined what I wanted to work on.</p>

I was a new member on the Filipino Frontend Developers(FFED) group. A facebook group that Filta organized. I was amazed by the amount of developers that are sharing ideas, and work critiques in the group. I wanted to post something myself. Then I visited Filta's website and saw that there are a lot to be improved there. So I took the initiative to redesign their dated UI to look more sophisticated, modern, and focusing mainly on making the site breathable, and intuitive to navigate.

I created this project with just the plain ol' `HTML & CSS`. Making the site responsive was challenging for two reasons:

- Filta's original site was not responsive it just zoomed out, and squished the texts. So I have no reference for improving it. But it was so bad It could only be improved.
- But the main reason was my inexperience with using media queries. After reading the documentation from [MDN](https://developer.mozilla.org/) it turned out to be very intuitive and easy. So I rewrote the project with a mobile-first approach and I had a lot of fun working on it.

All in all this was a fun experience and forced me to learn a lot. I also got more involved with the dev communities here in Philippines.

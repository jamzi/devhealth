---
title: Job scraping TODO more clickbaity title with technologies
date: "2019-10-27T22:12:03.284Z"
description: TODO more clickbaity title with technologies
---

TODO: describe the problem

Show diagram of the arhitecture

Show diff of new jobs via email

TODO: show UI

### Scraping job listings

Since the page is generated on the backend, we can easily just use a XHR library to get the HTML. This is in contract to running the whole browser environment with Puppeteer for JS rendered websites (we did this in the Food scraper project)

### Knowing what to send to the user

Saving data in a database, I choose hosted option of MongoDB (Atlas).

### Cron jobs

Was using [EasyCron](http://easycron.com), you do have a free plan, but it's limited and you need to renew it every month. I searched for alternatives and found [cron-job.org](https://cron-job.org). This is a super cool service, as it is free (you are encouraged to donate), you can set up a cron job to trigger every minute and you can also view the response of a cron job.

I had some issues when calling the scrape website which would return all the data and the cron job would fail because of the response being to big. I changed the endpoint for scraping to just return status code.

### Notifying users about new jobs

There are multiple ways to notify users about some new content. There are good old emails, push notifications etc. I first took a look at email services like SendGrid, which is a nice service, but it requires you to verify your business and it was really annoying when I wanted to just piece something together to test on a side project.

Then I thought about push notifications, which are more modern and direct way to engage with a user. This also has some drawbacks, as web version of push notifications (https://caniuse.com/#feat=push-api) is not supported on Safari, of course. This means that I could not work with Apple mobile users. Push notifications would work in an app, but demanding a user to install additional app just to show a notification is no go in my opinion.

This was really overwhelming and I took a step back and re-evaluated situation. Email is probably the only suitable option, but where to find a good provider (preferably free) to use. And then I though, hm, I am using Gmail for my personal and work account. Maybe I can just delete a job scraper Gmail account and send emails from there. ANd this is what I did.

I used Nodemailer packages for NodeJS.

To test sending emails from the Nodemailer, I used fake email smtp server just to test things out.

### Deployment

- When I deployed, the function was terminated before the email was sent. had to restructure the code.
- now secrets for env variables

### Overview

TODO: add GitHub link

#### Resources

- https://cheerio.js.org/ (Fast, flexible, and lean implementation of core jQuery designed specifically for the server)
- https://github.com/GoogleChrome/puppeteer (Headless Chrome Node.js API)
- https://nextjs.org/ (NextJS React Framework)
- https://zeit.co/ (Zeit Now platform)

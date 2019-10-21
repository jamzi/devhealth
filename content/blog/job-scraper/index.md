---
title: Job scraping TODO more clickbaity title with technologies
date: "2019-10-27T22:12:03.284Z"
description: TODO more clickbaity title with technologies
---

Students in Slovenia mostly use the eStudentski Servis web site to get job listings. The site supports filtering by type of work, location, and other parameters. It also supports being subscribed to a mailing list for new jobs.

The issue is that their mailing list feature doesn't support really selection of the job listings you want to be notified of. An example I want to be notified just of short term jobs in the main city which has an hourly rate of more than 6 euros.

I decided to create my own new job listings notifier using JavaScript, Zeit Now and Gmail.

### Architecture

![Architecture](./arhitecture-diagram.png)

#### Web UI

We are using NextJS on the frontend to display a simple form, where a user adds their email and the link to the job listings website. They can just filter the jobs on the job listings website to their needs and then just copy the link.

#### Backend

On save, the content of the form is sent to the backend and saved into a MongoDB database.

#### Scraper and cron job

We have set up a cron job, which runs every 15 minutes and calls and endpoints to scraper the job listings. This endpoint connects to the database to get all the subscriptions and uses the saved URL to scrape the website.

We get the latest jobs and compare if there is something new. If it is, we'll send an email to the use.

Each job listing has an id and when the scraper is run, we also save `lastJobId` to the database, so we know which jobs are new (the lastest jobs till this id).

TODO: show UI and diff of new jobs via email

### Scraping job listings

Since the page is generated on the backend, we can easily just use an XHR library to get the HTML. This is in contract to running the whole browser environment with Puppeteer for JS rendered websites (we did this in the Food scraper project)

### Knowing what to send to the user

We need to know, which is the latest job posting that the user saw. This is why we save lastJobId to the subscription data in the database. For the database, I have chosen the hosted option of MongoDB.

### Cron jobs

In my previous scraping projects, I was using [EasyCron](http://easycron.com), where you have a free plan, but it's limited and you need to renew it every month. I searched for alternatives and found [cron-job.org](https://cron-job.org). This is a cool service, as it is free and granular in the cron job options. I have set it up to trigger every 15 minutes and it also shows the response of a cron job.

Initially, I had some issues calling the scrape function, which would return all the scraped data. The cron job would fail because of the large response data. I changed the endpoint for scraping to just return status code and it's been working perfectly ever since.

### Notifying users about new jobs

There are multiple ways to notify users about some new content. There are good old emails, push notifications, etc. I was first looking at email services like SendGrid. It's a nice service, but it requires you to verify your business and it was annoying when I wanted to just piece something together to test on a side project.

Then I thought about push notifications, which are a more modern and direct way to engage with a user. This also has some drawbacks, as a web version of push notifications (https://caniuse.com/#feat=push-api) is not supported on Safari. This means that I could not work with iOS mobile users.

This was overwhelming and I took a step back and re-evaluated the situation. Email is probably the only suitable option, but where to find a good free provider to use. And then I thought, hm, I am using Gmail for my personal and work account. Maybe I can just delete a job scraper Gmail account and send emails from there. This approach is not suitable for email marketing, as Gmail provides a hard limit to the number of outgoing emails.

In the backend code, I used the Nodemailer package to set up Gmail email sending. To avoid flooding account with emails during development, I used the fake SMTP service called [MailTrap](https://mailtrap.io/).

### Deployment

I structured the project as a monorepo and I am deploying it to the Zeit Now service.

When I set up MongoDB and Gmail, I had to use API keys and passwords to access the service. These keys are kept in the .env file, which is not pushed to the version control. In Zeit Now deployments, you can specify environment variables in the `now.json` file and add them to the service via the `now secrets add` command. This way, only your development environment, and Zeit Dashboard know about these keys and not the user.

For development, I am using `now dev` command.

Feel free to join the project on [GitHub](https://github.com/jamzi/job-scraper), raise an issue or fork your version of the job scraper.

#### Resources

- https://zeit.co/docs/v2/environment-variables-and-secrets (Zeit Now Environment Variables and Secrets)
- https://nodemailer.com/ (Nodemailer)
- https://www.mongodb.com/cloud/atlas (MongoDB Atlas)

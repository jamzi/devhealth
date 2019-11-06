---
title: Slack Status Scheduler TODO better title
date: "2019-11-10T22:12:03.284Z"
description: TODO description
---

### Idea

I work from home one per week and on the team, we communicate this via the Slack status. You can use the predefined "Working remotely" status or define your own. The issue is that I always forget to set it, despite having a routine of working from home. To help with this, I decided to build an automatic Slack status scheduler that would do this for me once per week.

![Slack set status](./slack-status-set.png)

The second benefit of having such a system is that I can also schedule deep work time every day for a few hours, where I block the notifications and set the status to something like "Deep work, will reply soon". This way, I avoid the pitfall of always checking the messages on Slack and being distracted.

You can check it out at // TODO: add app link

### Target audience

This app was created for the users of the Slack messaging platform. It is especially targeted for people who are conscious of the fact that Slack brings a lot of noise into your work life if you are not disciplined to minimize the distractions.

It is also useful for people, who occasionally work from home and would like to set the status automatically every week.

### Competition

Slack has an app directory, where you can browse a ton of apps and integrations. I looked for similar products and couldn't find one that would do the specific things I described above.

![Slack app directory](./slack-app-directory.png)

I found a product called [Don't Interrupt](http://dontinterrupt.app/), where you can schedule work hours and it will display the status for hours outside this time window. The app offers a great user experience if you need this kind of behavior.

A lot of apps that control the Slack status integrate with your calendar and display "In a meeting" during your events. This is great, but I wanted to write something specific and optionally turn on the Do Not Disturb feature.

### Tech stack

#### Web interface

The frontend of the app is written in NextJS. It supports signing in with Slack and adding or deleting schedules. On the first page, it will list the schedules by day if you have any.

You can create a new schedule by clicking on the add button and following a three-step process. The first is adding a name, the second one is selecting the active hours when the status is displayed and the final step is choosing the status text and emoji.

// TODO: add a screenshot of frontend

#### Scheduler

The scheduler is the heart of the application. When you create a new schedule on the frontend, it will pass it to the scheduler which creates a cron job and persist it to the MongoDB database. I'm using the AgendaJS system for NodeJS, which provides an API to add, edit and delete cron jobs. When a cron job executes, it will execute a job that calls Slack API sets users' status and does not disturb preference.

![AgendaJS code](./agenda-code.png)

AgendaJS also offers some plugins, like Agendash to visualize the jobs in the system.

![Agendash](./agendash.png)

#### Slack API

To integrate your app with Slack, you need to create a new app on https://api.slack.com/. To be able to change the user's status and Do Not Disturb setting, you need to add `users.profile:write` and `dnd:write` scopes.

In the AgendaJS code, I'm using the Slack Web API for NodeJS, which provides a nice wrapper for calling the Slack server.

// TODO: explain that instead of using two cron jobs (one to set the status and one to clear it), you can use the expiration field when setting a user status on Slack. This applies to set DnD as well.

![Slack API code](./slack-code.png)

#### Hosting

The frontend is hosted on Zeit Now and the Scheduler is deployed as a managed NodeJS app on Google App Engine.

In my previous projects, I've used serverless architecture for backend, but it wouldn't work so well in this case, as cron jobs are running at every possible hour and the server needs to run continuously. This still falls under the free tier on Google Cloud platform for now. If you are new to this platform, you can leverage the free [\$300 dollar offer for new customers](https://cloud.google.com/free/).

I also used MongoDB Atlas free hosting to store the cron jobs.

### Overview

TODO: Open source it (if there will be a lot of traffic, we can make a premium version (hosted))

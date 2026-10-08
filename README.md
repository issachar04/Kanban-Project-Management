# Project Kanban Board

A single-page kanban board for managing project tasks. No install and no build step: everything is in `index.html`.

## Features

- Five stages: Backlog, To do, In progress, Review, Done
- Drag and drop cards between stages, with a work-in-progress limit of 3
- Allotted hours per card, and a timer that runs while a card is In progress
- Cards are flagged overdue when hours spent pass the allotted hours
- Assign cards to people and filter by project or person
- Report tab with totals by status, project and person
- Side menu that slides out as an overlay on phones

## Run it

Open `index.html` in a browser, or host the folder on GitHub Pages.

## Where data is saved

Cards and people are saved in the browser's local storage. Each browser has its own board: data is not shared between teammates or devices.

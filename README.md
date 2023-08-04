# St. John Berchmans Task Manager

This is a simple open source task management system for the church to keep track of tasks, volunteers and overall what needs to be done.

## Architecture
- Design mockups done with figma and the `.fig` files available for perusal 
- The ERD (entity relationship diagram) of the proposed database modelling available for reference in `stjohns_taskManager.drawio` file
- pdf files of the mockups are webapp and admin views are also available
- The proposed architecture using aws is also modelled and available in pdf format

## Tech Stack
- The backend is golangs gin framework
- The database is a mysql database
- The frontend is with reactjs

## Backend
- Run `make run` to run the app in development mode
- Run `make watch` to run the application in development mode but it rebuilds when there's a change to any file; it does this by building and running the build file everytime a file change occurs 
- Run `make tidy` to remove unused modules and add used ones within the project
- Run `make fmt` to format the entire source code
- Run `make lint` to initiate the linter
> *All other backend commands can be found in **Makefile** and can be run after `cd backend *
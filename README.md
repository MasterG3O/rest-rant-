# Project REST-Rant

REST-Rant is an app where users can review restaurants.
|  Method   | Path |  Purpose |
| ------------- | ------------- |
| GET  | /  | Home page| 
| GET  |/places  | Places index page|
| POST | /places | create new place |
| GET  |/places/new| Form page for creating a new place|
| GET  | /places/:id| Details about a particular place|
| PUT | /places/:id| Update a particular place|
| GET | /places:/id/edit| Form page for editing and existing page|
|DELETE| /places/:id|  Delete a particular place| 
| POST | /places/:id/rant | Create a rant (comment) about a particular place|
| DELETE| /places/:id/rant/:rantid| Delete a rant (commnent) about a particular place
|GET | * | 404 page(matches any router not defined above)
# genealogia

Genealogy application using the MEAN stack.

## commands

starting the server (http://localhost:8000)

`npm start`

### note on mongoDB
The database is hosted on mongoLab (mlab.com, free "500Mb - single database sandbox" plan), using AWS as cloud provider.
 mongodb://<dbuser>:<dbpassword>@ds035786.mlab.com:35786/database-genealogia

### note on eslint, atom and angular
The linter-eslint package (7.2.4) for Atom can't find the locally installed shareable configuration for angular linting.

### note on node-debbuger package for Atom
 - F5 will launch the debugger AND the application in debug mode AND will pause on the first line (F5 or "play" icon to resume). 
 - ctrl-F5 will debug the active file


**Workaround**
* Install eslint, eslint-plugin-angular and eslint-config-angular globally
* Use the global eslint installation in atom.  

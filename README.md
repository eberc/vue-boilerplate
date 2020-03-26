### My personal Vuejs boilerplate

**Stack**:
<br />
- Vue CLI <br>
- SCSS <br>
- BEM <br>
- Express <br>
<br>
The project has an express server to serve static files on Heroku. <br>
<br>

*OBS: At the beginning, I setup this boilerplate to create vue web components, but for some reason that I have no idea, Heroku can't build multiple components per deploy... If you check the script "heroku-postbuild-ignore" in the package.json, you'll see the script I was trying to run in deploy... I added the sufix '-ignore' to make it commented, but if you want to clone the repo and try to deploy multiple web components on Heroku, you can just remove the '-ignore' sufix, then Heroku will understand the script and will try to build all the components in the path src/components/.vue*<br>
<br>
Att, Eber ✌

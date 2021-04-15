## About

This repository is a boilerplate for new `.pug` projects.

## To Use With Existing Commits

Open up the command line and type these commands:</li>

```command
$ git clone --bare https://github.com/ekfuhrmann/project-boilerplate.git
# Make a bare clone of this repository
```

Create a new repo that you want to mirror into and then run the following:
```command
$ cd project-boilerplate.git
$ git push --mirror https://github.com/<user name>/<new repo>.git
# Mirror-push to the new repository
```

```command
$ cd ..
$ rm -Recurse -Force project-boilerplate.git
# Remove our temporary local repository
```

Read more <a href="https://help.github.com/articles/duplicating-a-repository/">here</a>.

## Important

Be sure to run `yarn install` or `npm install` on the new repository once it has been mirrored to.

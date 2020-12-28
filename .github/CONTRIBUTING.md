## Contributing to FlowCss

If you want to contribute to our project in any way, feel free to read our contribution guide.

And if you don't agree or want to alert us to something that caught your attention, feel free to open an issue by telling us about it.

## Topics

- [Pull Request](#pull-request)

<a id="pull-request"></a>
## Pull requests

A pull request from you, with the intention of implementing a new functionality, improving something that already exists, etc., will be very welcome, as long as you do everything right to avoid future frustrations.

Please before making a large pull request, be sure to ask first if what you want to send can be accepted, to avoid wasting your time on something that will not be incorporated by the creators in the project.

Please do not edit the files contained in the ``dist/css/`` or ``dist/js/`` folder, these files are automatically generated through the tools used in the project to prepare the final files, all commands to run these tools are in our ˋˋˋpackage. jsonˋˋˋ.

- 1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

```sh
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/flow-css.git
# Navigate to the newly cloned directory
cd flow-css
# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/fortrax-br/flow-css.git
```

- 2. If you cloned a while ago, get the latest changes from upstream:

```sh
git checkout main
git pull upstream main
```

- 3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

```sh
git checkout -b <topic-branch-name>
```
- 4. Commit your changes in logical chunks. Please adhere to these git [commit message guidelines](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) or your code is unlikely be merged into the main project. Use Git's [interactive rebase](https://help.github.com/articles/about-git-rebase/) feature to tidy up your commits before making them public.

- 5. Locally merge (or rebase) the upstream development branch into your topic branch:

```sh
git pull [--rebase] upstream main
```

- 6. Push your topic branch up to your fork:

```sh
git push origin <topic-branch-name>
```

- 7. [Open a Pull Request](https://help.github.com/articles/about-pull-requests/) with a clear title and description against the main branch.

__IMPORTANT__: By submitting a patch, you agree to allow the project owners to license your work under the terms of the [MIT](https://github.com/fortrax-br/flow-css/blob/master/LICENSE.md) License (if it includes code changes) and under the terms of the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/) (if it includes documentation changes).
